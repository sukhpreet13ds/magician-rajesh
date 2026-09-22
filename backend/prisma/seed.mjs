// One-off seed: populates the DB with the exact content the old hardcoded
// Vite site had, and copies its local image assets into public/uploads/seed/
// so the public site looks pixel-identical immediately after cutover, before
// any admin edits happen. Run locally with `npm run seed` (uses DATABASE_URL
// from .env.local) — not meant to run in production/CI.

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import { existsSync, mkdirSync, copyFileSync } from "fs";
import path from "path";
import {
  siteSettings,
  navLinks,
  pageContent,
  services,
  events,
  galleryItems,
  blogs,
  testimonials,
  brandLogos as brands,
} from "./seed-data.mjs";

const prisma = new PrismaClient();

const OLD_PROJECT_ROOT = path.resolve(process.cwd(), "..", "frontend");
const UPLOADS_DIR = path.resolve(process.cwd(), "public", "uploads", "seed");
const APP_URL = process.env.APP_URL || "http://localhost:3001";

function copyAsset(relPathFromOldProject) {
  if (!relPathFromOldProject) return null;
  const srcAbs = path.join(OLD_PROJECT_ROOT, relPathFromOldProject);
  if (!existsSync(srcAbs)) {
    console.warn(`  ! missing asset, skipping: ${relPathFromOldProject}`);
    return null;
  }
  const relUnderAssets = relPathFromOldProject.replace(/^src\/assets\//, "");
  const destAbs = path.join(UPLOADS_DIR, relUnderAssets);
  mkdirSync(path.dirname(destAbs), { recursive: true });
  copyFileSync(srcAbs, destAbs);
  return `${APP_URL}/uploads/seed/${relUnderAssets}`;
}

async function main() {
  console.log("Seeding admin user…");
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminEmail || !adminPassword) {
    throw new Error("Set ADMIN_EMAIL and ADMIN_PASSWORD in .env.local before seeding.");
  }
  const passwordHash = await bcrypt.hash(adminPassword, 12);
  await prisma.adminUser.upsert({
    where: { email: adminEmail },
    update: { passwordHash },
    create: { email: adminEmail, passwordHash },
  });

  console.log("Seeding site settings…");
  await prisma.siteSettings.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      logoUrl: copyAsset(siteSettings.logoImagePath),
      heroBackgroundUrl: copyAsset(siteSettings.heroBackgroundImagePath),
      phonePrimary: siteSettings.phonePrimary,
      phoneSecondary: siteSettings.phoneSecondary,
      phoneTertiary: siteSettings.phoneTertiary,
      emailPrimary: siteSettings.emailPrimary,
      emailBooking: siteSettings.emailBooking,
      facebookUrl: siteSettings.facebookUrl,
      instagramUrl: siteSettings.instagramUrl,
      youtubeUrl: siteSettings.youtubeUrl,
      footerHeading: siteSettings.footerHeading,
      footerHighlightWord: siteSettings.footerHighlightWord,
      footerBackgroundUrl: copyAsset(siteSettings.footerBackgroundImagePath),
      footerSubtext: siteSettings.footerSubtext,
      footerCopyrightText: siteSettings.footerCopyrightText,
      contactPersonName: siteSettings.contactPersonName,
      contactPersonTitle: siteSettings.contactPersonTitle,
    },
  });

  console.log("Seeding nav links…");
  for (let i = 0; i < navLinks.length; i++) {
    const link = navLinks[i];
    const existing = await prisma.navLink.findFirst({ where: { path: link.path } });
    if (existing) {
      await prisma.navLink.update({ where: { id: existing.id }, data: { label: link.label, sortOrder: i } });
    } else {
      await prisma.navLink.create({ data: { label: link.label, path: link.path, sortOrder: i, visible: true } });
    }
  }

  console.log("Seeding page content…");
  for (const [slug, data] of Object.entries(pageContent)) {
    const { heroImagePath, ...content } = data;
    // Resolve any *ImagePath fields inside content to uploaded URLs.
    for (const key of Object.keys(content)) {
      if (key.toLowerCase().endsWith("imagepath") && typeof content[key] === "string") {
        const url = copyAsset(content[key]);
        const newKey = key.replace(/Path$/, "");
        content[newKey] = url;
        delete content[key];
      }
    }
    // Same resolution, one level deep, for itemList arrays (e.g. home.servicesTeaser).
    for (const key of Object.keys(content)) {
      if (Array.isArray(content[key])) {
        content[key] = content[key].map((item) => {
          if (!item || typeof item !== "object") return item;
          const next = { ...item };
          for (const itemKey of Object.keys(next)) {
            if (itemKey.toLowerCase().endsWith("imagepath") && typeof next[itemKey] === "string") {
              next[itemKey.replace(/Path$/, "")] = copyAsset(next[itemKey]);
              delete next[itemKey];
            }
          }
          return next;
        });
      }
    }
    await prisma.pageContent.upsert({
      where: { pageSlug: slug },
      update: { heroImage: copyAsset(heroImagePath), content },
      create: { pageSlug: slug, heroImage: copyAsset(heroImagePath), content },
    });
  }

  console.log("Seeding services…");
  for (const s of services) {
    // The one service with real detail content (see seed-data.mjs comment) has 5
    // paragraphs split across two blocks in the original page: 3 before the second
    // heading, 2 after.
    const paragraphs = s.detailParagraphs || null;
    const firstBlock = paragraphs ? paragraphs.slice(0, 3) : null;
    const secondBlock = paragraphs && s.detailSecondHeading ? paragraphs.slice(3) : null;

    await prisma.service.upsert({
      where: { slug: s.slug },
      update: {},
      create: {
        title: s.title,
        slug: s.slug,
        cardImageUrl: copyAsset(s.cardImagePath),
        detailHeading: s.detailHeading || null,
        detailSubheading: s.detailSubheading || null,
        detailParagraphs: firstBlock,
        detailImageUrl: copyAsset(s.detailImagePath),
        detailSecondHeading: s.detailSecondHeading || null,
        detailParagraphs2: secondBlock,
        detailImageUrl2: copyAsset(s.detailImagePath2),
        sortOrder: s.sortOrder ?? 0,
      },
    });
  }

  console.log("Seeding events…");
  for (const e of events) {
    const existing = await prisma.event.findUnique({ where: { slug: e.slug } });
    if (existing) continue;
    await prisma.event.create({
      data: {
        title: e.title,
        slug: e.slug,
        displayDate: e.displayDate || null,
        cardImageUrl: copyAsset(e.cardImagePath),
        detailTag: e.detailTag || null,
        detailHeading: e.detailHeading || null,
        detailSubheading: e.detailSubheading || null,
        sortOrder: e.sortOrder ?? 0,
        photos: {
          create: (e.photos || []).map((p, i) => ({
            imageUrl: copyAsset(p.imagePath),
            title: p.title || null,
            sortOrder: i,
          })),
        },
      },
    });
  }

  console.log("Seeding gallery items…");
  for (let i = 0; i < galleryItems.length; i++) {
    const g = galleryItems[i];
    await prisma.galleryItem.create({
      data: {
        type: g.type,
        imageUrl: g.type === "image" ? copyAsset(g.imagePath) : null,
        videoEmbedId: g.type === "video" ? g.videoEmbedId : null,
        title: g.title || null,
        category: g.category,
        sizeClass: g.sizeClass,
        sortOrder: i,
      },
    });
  }

  console.log("Seeding blogs…");
  for (const b of blogs) {
    await prisma.blog.upsert({
      where: { slug: b.slug },
      update: {},
      create: {
        slug: b.slug,
        title: b.title,
        publishedDate: b.date ? new Date(b.date) : new Date(),
        category: b.category,
        readTime: b.readTime || null,
        author: b.author || null,
        imageUrl: copyAsset(b.imagePath),
        summary: b.summary || null,
        content: b.content,
        quote: b.quote || null,
        youtubeVideoId: b.youtubeVideoId || null,
        videoTitle: b.videoTitle || null,
      },
    });
  }

  console.log("Seeding testimonials…");
  for (let i = 0; i < testimonials.length; i++) {
    const t = testimonials[i];
    await prisma.testimonial.create({
      data: { name: t.name, rating: t.rating, text: t.text, sortOrder: i },
    });
  }

  console.log("Seeding brands…");
  for (let i = 0; i < brands.length; i++) {
    const b = brands[i];
    await prisma.brand.create({
      data: { name: b.name || null, logoUrl: copyAsset(b.imagePath), sortOrder: i },
    });
  }

  console.log("Done.");
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
