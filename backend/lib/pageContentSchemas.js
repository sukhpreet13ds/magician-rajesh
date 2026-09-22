// Field definitions for the free-form `PageContent.content` JSON blob, one
// entry per navbar/footer page. Drives the generic schema-based editor at
// app/admin/pages/[slug]. Adding a new text field to a page later just means
// adding a row here — no DB migration needed since `content` is JSON.

const itemList = (name, label, itemFields, hint) => ({
  name,
  label,
  type: "itemList",
  itemFields,
  hint,
});

export const pageContentSchemas = {
  home: {
    label: "Home",
    hasHeroImage: false,
    fields: [
      { name: "heroTitleLine1", label: "Hero Title — Line 1", type: "text" },
      { name: "heroTitleLine2", label: "Hero Title — Line 2 (gold)", type: "text" },
      { name: "heroSubtitleCursive", label: "Hero Subtitle — cursive word", type: "text" },
      { name: "heroSubtitleWord", label: "Hero Subtitle — gold word", type: "text" },
      { name: "heroFooterText", label: "Hero Footer Line", type: "text" },
      { name: "heroCtaText", label: "Hero Button Text", type: "text" },
      { name: "heroBackgroundImage", label: "Hero Background Image", type: "image" },
      { name: "heroOverlayImage", label: "Hero Overlay Image", type: "image" },
      { name: "heroPersonImage", label: "Hero Person Image", type: "image" },

      { name: "performerTag", label: "Performer Section — Tag", type: "text" },
      { name: "performerHeading", label: "Performer Section — Heading", type: "text" },
      { name: "performerBio1", label: "Performer Bio — Paragraph 1", type: "textarea" },
      { name: "performerBio2", label: "Performer Bio — Paragraph 2", type: "textarea" },
      { name: "performerQuote", label: "Performer Quote", type: "textarea" },
      { name: "performerBookBtnText", label: "Performer Button Text", type: "text" },
      { name: "performerStageImage", label: "Performer Stage Image", type: "image" },
      { name: "performerSideImage", label: "Performer Side Portrait", type: "image" },
      { name: "instagramReelPermalink", label: "Instagram Reel Permalink URL", type: "text" },

      { name: "servicesTag", label: "Services Teaser — Tag", type: "text" },
      { name: "servicesHeading", label: "Services Teaser — Heading", type: "text" },
      {
        ...itemList(
          "servicesTeaser",
          "Services Teaser — Cards",
          [
            { name: "title", label: "Title", type: "text" },
            { name: "description", label: "Description", type: "textarea" },
            { name: "image", label: "Image", type: "image" },
          ],
          "These 3 cards link to /services — independent from the full Services list."
        ),
      },
      { name: "servicesBtnText", label: "Services Teaser — Button Text", type: "text" },

      { name: "moreTag", label: '"More Than Entertainment" — Tag', type: "text" },
      { name: "moreHeading", label: '"More Than Entertainment" — Heading', type: "text" },
      { name: "moreBackgroundImage", label: '"More Than Entertainment" — Background Image', type: "image" },
      {
        ...itemList("moreCards", '"More Than Entertainment" — Cards', [
          { name: "title", label: "Title", type: "text" },
          { name: "description", label: "Description", type: "textarea" },
        ]),
      },

      { name: "experienceTag", label: "Experience Section — Tag", type: "text" },
      { name: "experienceHeading", label: "Experience Section — Heading", type: "text" },
      { name: "experienceText", label: "Experience Section — Paragraph", type: "textarea" },
      { name: "experienceImage", label: "Experience Section — Image", type: "image" },
      { name: "experienceBtnText", label: "Experience Section — Button Text", type: "text" },

      { name: "brandsTag", label: "Brands Section — Tag", type: "text" },
      { name: "brandsHeading", label: "Brands Section — Heading", type: "text" },
      { name: "testimonialsTag", label: "Testimonials Section — Tag", type: "text" },
      { name: "testimonialsHeading", label: "Testimonials Section — Heading", type: "text" },
    ],
  },

  about: {
    label: "About",
    hasHeroImage: true,
    fields: [
      { name: "tag", label: "Tag", type: "text" },
      { name: "heading", label: "Heading (H1)", type: "text" },
      { name: "subheading", label: "Subheading (H2)", type: "text" },
      { name: "portraitImage", label: "Portrait Image", type: "image" },
      { name: "bioParagraphs", label: "Biography Paragraphs", type: "paragraphs" },
      { name: "ctaText", label: '"Contact Me" Button Text', type: "text" },
      { name: "eventsTag", label: "Recent Events — Tag", type: "text" },
      { name: "eventsHeading", label: "Recent Events — Heading", type: "text" },
      { name: "eventsSubtitle", label: "Recent Events — Subtitle", type: "text" },
      { name: "eventsBtnText", label: "Recent Events — Button Text", type: "text" },
    ],
  },

  services: {
    label: "Services (list page)",
    hasHeroImage: true,
    fields: [
      { name: "tag", label: "Tag", type: "text" },
      { name: "heading", label: "Heading (H1)", type: "text" },
      { name: "subheading", label: "Subheading (H2)", type: "text" },
      { name: "description", label: "Description Paragraph", type: "textarea" },
      { name: "bottomBtnText", label: "Bottom Button Text", type: "text" },
    ],
  },

  gallery: {
    label: "Gallery",
    hasHeroImage: true,
    fields: [
      { name: "tag", label: "Tag", type: "text" },
      { name: "heading", label: "Heading (H1)", type: "text" },
      { name: "subheading", label: "Subheading (H2)", type: "text" },
      { name: "description", label: "Description Paragraph", type: "textarea" },
    ],
  },

  events: {
    label: "Events (list page)",
    hasHeroImage: true,
    fields: [
      { name: "tag", label: "Tag", type: "text" },
      { name: "heading", label: "Heading (H1)", type: "text" },
      { name: "subheading", label: "Subheading (H2)", type: "text" },
      { name: "description", label: "Description Paragraph", type: "textarea" },
    ],
  },

  blogs: {
    label: "Blogs (list page)",
    hasHeroImage: true,
    fields: [
      { name: "tag", label: "Tag", type: "text" },
      { name: "heading", label: "Heading (H1)", type: "text" },
      { name: "subheading", label: "Subheading (H2)", type: "text" },
      { name: "description", label: "Description Paragraph", type: "textarea" },
    ],
  },

  contact: {
    label: "Contact",
    hasHeroImage: true,
    fields: [
      { name: "tag", label: "Tag", type: "text" },
      { name: "heading", label: "Heading (H1)", type: "text" },
      { name: "subheading", label: "Subheading (H2)", type: "text" },
      { name: "formHeading", label: "Form Heading", type: "text" },
      { name: "successMessage", label: "Success Message", type: "textarea" },
      {
        name: "note",
        label: "Note",
        type: "info",
        hint: "Phone numbers, emails, social links and the contact person block are edited under Settings, not here — they're shared across the whole site.",
      },
    ],
  },

  privacy: {
    label: "Privacy Policy",
    hasHeroImage: true,
    fields: [
      { name: "tag", label: "Tag", type: "text" },
      { name: "heading", label: "Heading (H1)", type: "text" },
      { name: "effectiveDateText", label: "Effective Date Line (H2)", type: "text" },
      { name: "intro", label: "Intro Paragraph", type: "textarea" },
      {
        ...itemList("sections", "Sections", [
          { name: "heading", label: "Section Heading", type: "text" },
          { name: "body", label: "Section Body", type: "textarea" },
          { name: "listItems", label: "Bullet List (optional)", type: "paragraphs" },
        ]),
      },
    ],
  },

  terms: {
    label: "Terms & Conditions",
    hasHeroImage: true,
    fields: [
      { name: "tag", label: "Tag", type: "text" },
      { name: "heading", label: "Heading (H1)", type: "text" },
      { name: "effectiveDateText", label: "Effective Date Line (H2)", type: "text" },
      { name: "intro", label: "Intro Paragraph", type: "textarea" },
      {
        ...itemList("sections", "Sections", [
          { name: "heading", label: "Section Heading", type: "text" },
          { name: "body", label: "Section Body", type: "textarea" },
        ]),
      },
    ],
  },
};
