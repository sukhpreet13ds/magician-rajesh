/**
 * seed-data.js
 * Verbatim content extraction from the live magician-rajesh React/Vite site,
 * captured on 2026-09-22, for use in a Prisma seed script.
 *
 * SOURCE FILES READ IN FULL:
 *   src/pages/ServiceView.jsx, src/pages/Services.jsx, src/pages/Gallery.jsx,
 *   src/pages/Events.jsx, src/pages/EventView.jsx, src/pages/Blogs.jsx,
 *   src/pages/BlogView.jsx, src/data/blogsData.js, src/pages/About.jsx,
 *   src/pages/Contact.jsx, src/pages/Privacy.jsx, src/pages/Terms.jsx,
 *   src/components/Navbar.jsx, src/components/FooterSection.jsx,
 *   src/components/TestimonialsMarquee.jsx, src/components/BrandsMarquee.jsx
 *
 * NOTE: src/pages/Services.jsx was NOT in the caller's original file list but was
 * read anyway because the requested `services` shape (12-item servicesList) only
 * exists there — without it the `services` export could not be produced.
 *
 * All image paths are literal relative strings (e.g. "src/assets/in-service1.png"),
 * NOT import statements, exactly as requested.
 */

// =====================================================================
// SITE SETTINGS
// =====================================================================

export const siteSettings = {
  // Phone numbers: +919372074683 is the most-repeated number across the codebase
  // (ServiceView.jsx, Navbar.jsx x3, FooterSection.jsx) so it is chosen as primary.
  phonePrimary: "+919372074683",   // displayed variously as "+91-9372074683" / "+91 93720 74683" / "+919372074683"
  phoneSecondary: "+919004775683", // displayed as "+91-9004775683" (ServiceView) / "+91-90047-75683" (Contact)
  phoneTertiary: "+919417294616",  // displayed as "+91-9417294616" (ServiceView) / "+91-94172-94616" (Contact)

  // ADDITIONAL distinct phone numbers found that don't fit the 3-slot template
  // (there are 6 distinct numbers total across the site, not 3):
  additionalPhoneNumbers: [
    {
      number: "+919372074689",
      displayText: "+91-93720-74689",
      foundIn: "Contact.jsx (contact-info card, first of 3 numbers)",
      note: "Off-by-one-digit from phonePrimary (...683 vs ...689) — appears to be a data inconsistency in the live source; preserved verbatim rather than corrected.",
    },
    {
      number: "+919004149683",
      displayText: "+919004149683",
      foundIn: "FooterSection.jsx (footer-contact-item, second number)",
    },
    {
      number: "+918104705133",
      displayText: "+918104705133",
      foundIn: "FooterSection.jsx (footer-contact-item, third number)",
    },
  ],

  emailPrimary: "rajesh.kumar67@yahoo.in",   // ServiceView.jsx contact box + Contact.jsx emails-list
  emailBooking: "info@rajeshmagic.com",      // Contact.jsx emails-list + Footer (also shown uppercase INFO@RAJESHMAGIC.COM in footer)

  // Additional email found only in Navbar.jsx (mailto link on the envelope icon, no visible text)
  emailNavbarSocial: "contact@magicianrajesh.com",

  // All social links on the live site are generic root URLs (no specific handle/profile slug anywhere in the code)
  facebookUrl: "https://facebook.com",
  instagramUrl: "https://instagram.com",
  youtubeUrl: "https://youtube.com",

  contactPersonName: "MR. ANKIT",
  contactPersonTitle: "(Official Management)",

  footerHeading: "AN EXPERIENCE FOR YOUR GUESTS", // rendered with <span class="highlight-gold">GUESTS</span> around the last word
  footerHighlightWord: "GUESTS",
  footerSubtext: "Would you like to offer your guests an unforgettable experience at your next event?\nFeel free to contact me – together, we will create magical moments and make your event truly extraordinary.",
  footerCopyrightText: "Copyright © 2026 Rajesh Magic.\nAll Rights Reserved.",

  logoImagePath: "src/assets/magician-logo.png",
  heroBackgroundImagePath: "src/assets/back-wall.jpg",
  footerBackgroundImagePath: "src/assets/unforget-bg.jpg",
};

// =====================================================================
// NAV LINKS (Navbar.jsx — 7 links)
// =====================================================================

export const navLinks = [
  { label: "HOME", path: "/" },
  { label: "ABOUT", path: "/about" },
  { label: "SERVICES", path: "/services" },
  { label: "GALLERY", path: "/gallery" },
  { label: "EVENTS", path: "/events" },
  { label: "BLOGS", path: "/blogs" },
  { label: "CONTACT US", path: "/contact" },
];

// =====================================================================
// PAGE CONTENT
// =====================================================================

export const pageContent = {
  home: {
    heroTitleLine1: "NOT JUST",
    heroTitleLine2: "ENTERTAINMENT.",
    heroSubtitleCursive: "An",
    heroSubtitleWord: "EXPERIENCE",
    heroFooterText: "THEY WILL NEVER FORGET.",
    heroCtaText: "ENQUIRE FOR YOUR EVENT",
    heroBackgroundImagePath: "src/assets/back-wall.jpg",
    heroOverlayImagePath: "src/assets/hero-bg.png",
    heroPersonImagePath: "src/assets/magician-rajesh.png",

    performerTag: "The Performer",
    performerHeading: "MAGIC BUILT AROUND YOUR AUDIENCE.",
    performerBio1:
      "From a breakthrough on India's Magic Star to appearances on India's Got Talent and Hunarbaaz: Desh Ki Shaan, Rajesh Kumar has spent over sixteen years turning audiences into part of the story.",
    performerBio2:
      "Every show is alive, interactive and flexible: close-up astonishment among guests, a high-energy stage act, or pure mind reading designed for the room in front of him.",
    performerQuote: "\"Not just a show—an experience your guests will keep talking about.\"",
    performerBookBtnText: "BOOK RAJESH",
    performerStageImagePath: "src/assets/igt-stage.png",
    performerSideImagePath: "src/assets/rajesh-side.png",
    instagramReelPermalink: "https://www.instagram.com/reel/DdY2zS0yysn/?utm_source=ig_embed&utm_campaign=loading",

    servicesTag: "Suitable for",
    servicesHeading: "EXTRAÖRDINARY EVENTS",
    servicesTeaser: [
      {
        title: "CORPORATE MAGIC",
        description: "A 30–45 minute interactive show for conferences, dealer meets, team events and award nights.",
        imagePath: "src/assets/magice-service1.png",
      },
      {
        title: "PRODUCT LAUNCH ILLUSIONS",
        description: "Reveal a product, bring your CEO on stage, or make a brand message appear in a truly memorable way.",
        imagePath: "src/assets/magic-service2.png",
      },
      {
        title: "CLOSE-UP & IPAD MAGIC",
        description: "Personal, high-impact magic for cocktail hours, VIP guests, exhibitions and intimate gatherings.",
        imagePath: "src/assets/magice-service3.png",
      },
    ],
    servicesBtnText: "VIEW ALL SERVICES",

    moreTag: "More than",
    moreHeading: "ENTERTAINMENT",
    moreBackgroundImagePath: "src/assets/more-bg.jpg",
    moreCards: [
      { title: "PSYCHOLOGICAL<br />EFFECT", description: "Moments that feel personal, impossible, and deeply unforgettable." },
      { title: "GENUINE INTERACTION<br />WITH A WOW FACTOR", description: "Your guests don't just watch —they become part of the experience." },
      { title: "ELEGANT<br />ATMOSPHERE", description: "Sophisticated, intelligent entertainment that elevates the entire event." },
    ],

    experienceTag: "The person behind",
    experienceHeading: "THE EXPERIENCE",
    experienceText:
      "Magician Rajesh Kumar is a Mumbai based illusionist and magician who have changed the way we have been looking to magic. Magician Rajesh Kumar has performed for several tv channels national and regional he first came into limelight with his appearance on India's magic star on star one in which he was selected in India's top 10 magician from all over India, after this magician illusionist Rajesh Kumar travelled all across India performing his magic and mentalism shows.",
    experienceImagePath: "src/assets/experience-right.jpg",
    experienceBtnText: "READ MORE",

    brandsTag: "A selection",
    brandsHeading: "BRANDS RAJESH WORK WITH",
    testimonialsTag: "Valued by customers",
    testimonialsHeading: "WITH THE HIGHEST STANDARDS",
  },

  about: {
    heroImagePath: "src/assets/back-wall.jpg",
    tag: "The Illusionist",
    heading: "ABOUT",
    subheading: "Magician Rajesh Kumar",
    portraitImagePath: "src/assets/magician-rajesh.png",
    bioParagraphs: [
      "Mr. Rajesh Kumar is a Mumbai based illusionist and magician. He has changed the way we look for magic. Magician Rajesh Kumar has performed for many TV channels which are both national and regional. He got fame and came under the limelight for the first time when he appeared on India's Magic Star show telecasted on the \"Star One\" channel. Magician Rajesh Kumar was selected in India's top 10 magicians from all over the country. Furthermore, magician & illusionist Rajesh Kumar traveled all across India and performed his magic and mentalism shows in Mumbai, Jaipur, Udaipur, Chennai, Ludhiana, Gwalior, Abohar, Patiala, Bhatinda, New Delhi, Gurgaon, and Goa. He has not just performed in India but also he has taken his magic & illusion to several foreign countries which include Hong Kong (China) and Fiji Island (Japan). He is originally based in Mumbai and magician Rajesh Kumar has worked with many TV channels for magic consultancy. He has helped many several TV producers and director in creating magic on screen. With Magician Rajesh Kumar's deep knowledge in magic, he has helped to create magic for several TV shows, reality shows such as \"India's Got Talent\" where Kiron Kher made a bike appeared on stage was all because of Rajesh planning and execution. That's not all, magician Rajesh Kumar has done TV commercial for brand \"Pizza Hut\".",
      "Magician Rajesh Kumar did several types of magic. You can also know more about his magic by visiting on his services page. Today Rajesh Kumar's name in the magic world is stabilized in India. Mumbai based Rajesh Kumar has made his name in corporate by performing for brands like Pizza Hut, LG, TV, Honda, Hero, Samsung, Coca-Cola, Bajaj Alliance, Omex, Hindustan Times, Datsun, Nippon Paints are few of them. Rajesh Kumar is an Illusionist, street magician, mentalist, metal bender and also a celebrity youth magician of India.",
      "Magician Rajesh Kumar did all this at the age of 22.",
      "India's Got Talent Season 6 2015 was one of the highest TRP ratings shows on Colors TV. He has also done a TV show named India's Magic Star show aired on Star One channel which was one of the most successful television shows on Star One channel.",
      "Rajesh Kumar is India's top & modern illusionist. He is youngest and the only magician in India to do death-defying escape from the box full of RDX which was lifted in the air. Moreover, he also did world fastest costume change magic. He is the only magician in India to able to walk on the wall. Also, did famous Houdini escape on Colors TV. He was awarded Jadu Shiromani Award by Indian brotherhood of magicians (magician of the year). Furthermore, he has performed for CM in New Delhi Sheela Dixit in India's 1st magic festival and also performed vanished trick at Pitampura TV tower in New Delhi.",
    ],
    ctaText: "CONTACT ME",
    eventsTag: "Glimpse of excellence",
    eventsHeading: "RECENT EVENTS",
    eventsSubtitle: "Glimpse of recent events of Magician Rajesh Kumar",
    eventsBtnText: "VIEW MORE EVENTS",
  },

  services: {
    heroImagePath: "src/assets/back-wall.jpg",
    tag: "World Class Acts",
    heading: "SERVICES",
    subheading: "Magician Rajesh Kumar",
    description: "My non stop show is packed with thrilling & sophisticated illusions of unprecedented proportions wherein the audience witnesses stunning acts of Digital Magic, Mind Reading, Visual illusions and more ..",
    bottomBtnText: "VIEW MORE SERVICES",
  },

  gallery: {
    heroImagePath: "src/assets/back-wall.jpg",
    tag: "Visual Spectacle",
    heading: "GALLERY",
    subheading: "Magician Rajesh Kumar",
    description: "Explore moments of wonder, mind-bending illusions, stage acts, corporate events, and live performance videos.",
  },

  events: {
    heroImagePath: "src/assets/back-wall.jpg",
    tag: "Moments of Magic",
    heading: "EVENTS",
    subheading: "Magician Rajesh Kumar",
    description: "Glimpse of recent shows, corporate galas, stage illusions, and recognition events across the globe.",
  },

  blogs: {
    heroImagePath: "src/assets/back-wall.jpg",
    tag: "Wisdom & Wonder",
    heading: "OUR BLOGS",
    subheading: "Magician Rajesh Kumar",
    description: "Discover fascinating articles on corporate illusion, mind-reading psychology, techno magic innovation, and behind-the-scenes magic insights.",
  },

  contact: {
    heroImagePath: "src/assets/back-wall.jpg",
    tag: "Get In Touch",
    heading: "CONTACT",
    subheading: "Magician Rajesh Kumar",
    formHeading: "SEND US AN EMAIL",
    successMessage: "Thank you! Your message has been sent successfully. We will get back to you soon.",
  },

  privacy: {
    heroImagePath: "src/assets/back-wall.jpg",
    tag: "Legal & Privacy",
    heading: "PRIVACY POLICY",
    effectiveDateText: "Effective Date: September 22, 2026",
    intro: "Rajesh Magic respects your privacy. This Privacy Policy explains how we collect and use information when you visit rajeshmagic.com.",
    sections: [
      {
        heading: "Information We Collect",
        body: "When you contact us or submit a booking inquiry, we may collect information such as your name, email address, phone number, event details, and any message you provide.\n\nWe may also collect basic technical information such as your browser, device, IP address, and pages visited.",
      },
      {
        heading: "How We Use Your Information",
        body: "We may use your information to:",
        listItems: [
          "Respond to inquiries and booking requests",
          "Communicate about our services and events",
          "Improve our website and services",
          "Maintain website security",
          "Comply with applicable laws",
        ],
      },
      {
        heading: "Sharing of Information",
        body: "We do not sell or rent your personal information. Information may be shared with trusted service providers when necessary to operate our website or provide requested services, or when required by law.",
      },
      {
        heading: "Third-Party Links",
        body: "Our website may contain links to social media and other third-party websites. We are not responsible for their privacy practices or content.",
      },
      {
        heading: "Data Security",
        body: "We take reasonable steps to protect your information, but no online transmission or storage system can be guaranteed to be completely secure.",
      },
      {
        heading: "Changes to This Policy",
        body: "We may update this Privacy Policy from time to time. Any changes will be posted on this page.",
      },
      {
        heading: "Contact",
        body: "For privacy-related questions, contact us through the contact information provided on rajeshmagic.com.",
      },
    ],
  },

  terms: {
    heroImagePath: "src/assets/back-wall.jpg",
    tag: "Terms of Service",
    heading: "TERMS & CONDITIONS",
    effectiveDateText: "Effective Date: September 22, 2026",
    intro: "By accessing and using rajeshmagic.com, you agree to these Terms & Conditions.",
    sections: [
      {
        heading: "Website Use",
        body: "The content on this website is provided for general information about Rajesh Magic, its performances, services, and events. You agree to use the website only for lawful purposes.",
      },
      {
        heading: "Bookings",
        body: "Submitting a booking or contact form does not automatically confirm an event. Availability, pricing, event details, payment terms, cancellation terms, and other requirements will be confirmed separately with Rajesh Magic.",
      },
      {
        heading: "Intellectual Property",
        body: "All website content, including text, photographs, videos, logos, graphics, and design, belongs to Rajesh Magic or its respective owners and may not be copied, reproduced, or used commercially without permission.",
      },
      {
        heading: "Third-Party Links",
        body: "The website may contain links to third-party websites or social-media platforms. Rajesh Magic is not responsible for the content, availability, or policies of those websites.",
      },
      {
        heading: "Website Information",
        body: "We make reasonable efforts to keep the information on this website accurate, but services, availability, pricing, and other information may change without notice.",
      },
      {
        heading: "Limitation of Liability",
        body: "Rajesh Magic is not responsible for losses arising from website interruptions, third-party services, technical issues, or reliance on website information, to the extent permitted by applicable law.",
      },
      {
        heading: "Changes to These Terms",
        body: "We may update these Terms & Conditions at any time. Updated terms will be posted on this page.",
      },
      {
        heading: "Governing Law",
        body: "These Terms shall be governed by the applicable laws of India.",
      },
      {
        heading: "Contact",
        body: "For questions regarding these Terms, please contact us through rajeshmagic.com.",
      },
    ],
  },
};

// =====================================================================
// SERVICES (12 from Services.jsx servicesList)
// ASSUMPTION: None of the 12 titles in Services.jsx exactly match
// ServiceView.jsx's "CORPORATE MAGICIAN INDIA" detail content, and
// ServiceView.jsx is not linked from any specific card (all 12 cards
// link generically to `/service-view`). Per instructions, the full
// ServiceView detail content is attached ONLY to id:1 ("MENTALISM SHOWS").
// The other 11 services get detailHeading/detailSubheading/detailParagraphs/
// detailImagePath = null.
// =====================================================================

export const services = [
  {
    id: 1,
    title: "MENTALISM SHOWS",
    slug: "mentalism-shows",
    cardImagePath: "src/assets/in-service1.png",
    // --- ServiceView.jsx detail content attached here (see assumption note above) ---
    detailHeading: "CORPORATE MAGICIAN INDIA",
    detailSubheading: "Magician Rajesh Kumar",
    detailSecondHeading: "HIRE A CORPORATE MAGICIAN IN INDIA", // second section title within ServiceView.jsx
    detailParagraphs: [
      "While hiring a professional magician for your corporate event, you want your guests to talk about the show for weeks to come. A corporate magician is a perfect cherry on top to make the night memorable for your guests. But, do you know what exactly does a corporate magician do?",
      "Experienced magicians are skilled in customizing and personalizing their performance, depending on the audience and their mood. The same works for corporate magicians! They make sure to customize every magic show that meets the needs of a specific venue.",
      "By hiring a corporate magician in India for your event, you ensure to treat your guests with a unique and surreal experience that they have never seen before, along with having fun!",
      "Magician Rajesh Kumar is an illusionist and magician. He has been a part of many TV shows which are broadcast across the world. The experienced magician & illusionist traveled all across and outside the country, performing magic and mentalism shows. He has also helped several TV producers and directors to create magic on screen.",
      "Rajesh Kumar specializes in several types of magic, such as corporate magic, iPad magic, illusion shows, etc. Today, Rajesh Kumar has been able to make his name in the corporate world by performing for brands like Hero, Pizza Hut, LG TV, Samsung, Bajaj Alliance, Omex, Coca-Cola, Hindustan Times, Honda, Datsun, Nippon Paints, and many others.",
    ],
    detailImagePath: "src/assets/in-service1.png",  // top image in ServiceView.jsx (alt="Corporate Magician India")
    detailImagePath2: "src/assets/in-service2.png", // second image in ServiceView.jsx (alt="Hire A Corporate Magician In India")
    detailContactCallout: {
      label: "For more information, call us at",
      phones: ["+919372074683", "+919004775683", "+919417294616"],
      emailLabel: "or drop an email at",
      email: "rajesh.kumar67@yahoo.in",
      footerTag: "Book Magician Kumar for your corporate event now!",
    },
    sortOrder: 0,
  },
  { id: 2, title: "MENTALIST", slug: "mentalist", cardImagePath: "src/assets/in-service2.png", detailHeading: null, detailSubheading: null, detailParagraphs: null, detailImagePath: null, sortOrder: 1 },
  { id: 3, title: "MIND READING SHOWS", slug: "mind-reading-shows", cardImagePath: "src/assets/in-service3.png", detailHeading: null, detailSubheading: null, detailParagraphs: null, detailImagePath: null, sortOrder: 2 },
  { id: 4, title: "ILLUSION SHOW", slug: "illusion-show", cardImagePath: "src/assets/in-service4.png", detailHeading: null, detailSubheading: null, detailParagraphs: null, detailImagePath: null, sortOrder: 3 },
  { id: 5, title: "ONLINE EVENT", slug: "online-event", cardImagePath: "src/assets/in-service5.png", detailHeading: null, detailSubheading: null, detailParagraphs: null, detailImagePath: null, sortOrder: 4 },
  { id: 6, title: "ONLINE MAGIC SHOWS", slug: "online-magic-shows", cardImagePath: "src/assets/in-service6.png", detailHeading: null, detailSubheading: null, detailParagraphs: null, detailImagePath: null, sortOrder: 5 },
  { id: 7, title: "PRIVATE PARTIES", slug: "private-parties", cardImagePath: "src/assets/in-service7.png", detailHeading: null, detailSubheading: null, detailParagraphs: null, detailImagePath: null, sortOrder: 6 },
  { id: 8, title: "STAGE MAGIC", slug: "stage-magic", cardImagePath: "src/assets/in-service8.png", detailHeading: null, detailSubheading: null, detailParagraphs: null, detailImagePath: null, sortOrder: 7 },
  { id: 9, title: "TRADE SHOWS", slug: "trade-shows", cardImagePath: "src/assets/in-service9.png", detailHeading: null, detailSubheading: null, detailParagraphs: null, detailImagePath: null, sortOrder: 8 },
  { id: 10, title: "VIRTUAL EVENT", slug: "virtual-event", cardImagePath: "src/assets/in-service10.png", detailHeading: null, detailSubheading: null, detailParagraphs: null, detailImagePath: null, sortOrder: 9 },
  { id: 11, title: "IPAD MAGIC", slug: "ipad-magic", cardImagePath: "src/assets/in-service11.png", detailHeading: null, detailSubheading: null, detailParagraphs: null, detailImagePath: null, sortOrder: 10 },
  { id: 12, title: "CLOSE-UP MAGIC", slug: "close-up-magic", cardImagePath: "src/assets/in-service12.png", detailHeading: null, detailSubheading: null, detailParagraphs: null, detailImagePath: null, sortOrder: 11 },
];

// =====================================================================
// EVENTS (4 unique rows from Events.jsx eventsList, x3 cycling duplication ignored)
// ASSUMPTION: EventView.jsx ("RAJESH KUMAR / LIVE @ MUMBAI FOR CORPORATE", 11 photos)
// is not linked from any specific Events.jsx card (all cards link generically to
// `/event-view`). Per instructions, its detail content + all 11 photos are attached
// ONLY to event id:1. The other 3 events get detailTag/detailHeading/detailSubheading
// = null and photos: [].
// =====================================================================

export const events = [
  {
    id: 1,
    title: "Magician Rajesh Kumar's Mind-blowing Performance At Elitecisos Corporate Event In Mumbai",
    slug: "magician-rajesh-kumars-mind-blowing-performance-elitecisos-corporate-event-mumbai",
    displayDate: "Thursday 1st of January",
    cardImagePath: "src/assets/event1.png",
    // --- EventView.jsx detail content attached here (see assumption note above) ---
    detailTag: "Exclusive Performance Highlights",
    detailHeading: "RAJESH KUMAR",
    detailSubheading: "LIVE @ MUMBAI FOR CORPORATE",
    photos: [
      { imagePath: "src/assets/event-d1.png", title: "Stage Illusions Performance" },
      { imagePath: "src/assets/event-d2.png", title: "Corporate Screen Magic" },
      { imagePath: "src/assets/event-d3.png", title: "Visual Mind Reading" },
      { imagePath: "src/assets/event-d4.png", title: "Audience Stage Interaction" },
      { imagePath: "src/assets/event-d5.png", title: "Live Magic Showcase" },
      { imagePath: "src/assets/event-d6.png", title: "Corporate Event Gathering" },
      { imagePath: "src/assets/event-d7.png", title: "Digital Screen Illusion" },
      { imagePath: "src/assets/event-d8.png", title: "Interactive Card & Mind Trick" },
      { imagePath: "src/assets/event-d9.png", title: "Spotlight Magic Act" },
      { imagePath: "src/assets/event-d10.png", title: "Audience Surprise Moment" },
      { imagePath: "src/assets/event-d11.png", title: "Stage Finale Magic" },
    ],
    sortOrder: 0,
  },
  {
    id: 2,
    // Verbatim from source, including the "R&R;" typo/HTML-entity artifact present in Events.jsx
    title: "YES Bank R&R; Rewards and Recognition Event in Lonavala Elevated by the Mesmerizing Performance of Magician Rajesh Kumar Fariyas Resort Lonavala",
    slug: "yes-bank-rewards-recognition-event-lonavala-fariyas-resort",
    displayDate: "Thursday 1st of January",
    cardImagePath: "src/assets/event2.png",
    detailTag: null,
    detailHeading: null,
    detailSubheading: null,
    photos: [],
    sortOrder: 1,
  },
  {
    id: 3,
    title: "Magician Rajesh Kumar Mesmerizes Crowd At Deolali Nashik",
    slug: "magician-rajesh-kumar-mesmerizes-crowd-deolali-nashik",
    displayDate: "Thursday 1st of January",
    cardImagePath: "src/assets/event3.png",
    detailTag: null,
    detailHeading: null,
    detailSubheading: null,
    photos: [],
    sortOrder: 2,
  },
  {
    id: 4,
    title: "Rajesh Kumar close-up magic performance at the Amazon AWS event in Hyderabad Novotel Hyderabad Convention Centre",
    slug: "rajesh-kumar-close-up-magic-amazon-aws-hyderabad-novotel",
    displayDate: "Thursday 1st of January",
    cardImagePath: "src/assets/event4.png",
    detailTag: null,
    detailHeading: null,
    detailSubheading: null,
    photos: [],
    sortOrder: 3,
  },
];

// =====================================================================
// GALLERY ITEMS (11 from Gallery.jsx galleryItems — original non-sequential
// ids [1,3,4,5,7,8,9,11,12,13,15] preserved exactly as in source)
// =====================================================================

export const galleryItems = [
  {
    id: 1,
    type: "video",
    videoEmbedId: "XWexSwZE6js",
    title: "Magician Rajesh Kumar Live Show",
    category: "videos",
    sizeClass: "gallery-item-large",
    imagePath: null,
  },
  {
    id: 3,
    type: "image",
    imagePath: "src/assets/in-service1.png",
    title: "Mentalism & Mind Reading Show",
    category: "corporate",
    sizeClass: "gallery-item-small",
    videoEmbedId: null,
  },
  {
    id: 4,
    type: "image",
    imagePath: "src/assets/in-service4.png",
    title: "Grand Illusion Performance",
    category: "stage",
    sizeClass: "gallery-item-tall",
    videoEmbedId: null,
  },
  {
    id: 5,
    type: "video",
    videoEmbedId: "BgpcHOwKw4k",
    title: "Grand Magic & Escape Act",
    category: "videos",
    sizeClass: "gallery-item-large",
    imagePath: null,
  },
  {
    id: 7,
    type: "image",
    imagePath: "src/assets/in-service11.png",
    title: "High-Tech iPad Magic",
    category: "corporate",
    sizeClass: "gallery-item-small",
    videoEmbedId: null,
  },
  {
    id: 8,
    type: "image",
    imagePath: "src/assets/in-service7.png",
    title: "Exclusive Private Party Illusion",
    category: "events",
    sizeClass: "gallery-item-wide",
    videoEmbedId: null,
  },
  {
    id: 9,
    type: "image",
    imagePath: "src/assets/magice-service1.png", // note: source filename literally has the "magice" typo
    title: "Interactive Guest Performance",
    category: "events",
    sizeClass: "gallery-item-small",
    videoEmbedId: null,
  },
  {
    id: 11,
    type: "image",
    imagePath: "src/assets/magic-service2.png",
    title: "Stage Audience Interaction",
    category: "stage",
    sizeClass: "gallery-item-small",
    videoEmbedId: null,
  },
  {
    id: 12,
    type: "image",
    imagePath: "src/assets/in-service9.png",
    title: "Corporate Trade Show Event",
    category: "corporate",
    sizeClass: "gallery-item-tall",
    videoEmbedId: null,
  },
  {
    id: 13,
    type: "image",
    imagePath: "src/assets/magice-service3.png", // note: source filename literally has the "magice" typo
    title: "Award Ceremony Magic Show",
    category: "events",
    sizeClass: "gallery-item-medium",
    videoEmbedId: null,
  },
  {
    id: 15,
    type: "image",
    imagePath: "src/assets/in-service2.png",
    title: "Mentalist Performance",
    category: "corporate",
    sizeClass: "gallery-item-medium",
    videoEmbedId: null,
  },
];

// =====================================================================
// BLOGS (4 from src/data/blogsData.js — id used directly as slug, already kebab-case)
// =====================================================================

export const blogs = [
  {
    slug: "corporate-magic-secrets",
    title: "Why Corporate Events Need a Professional Illusionist & Mind Reader",
    date: "September 15, 2026",
    category: "Corporate Magic",
    readTime: "5 min read",
    author: "Magician Rajesh Kumar",
    imagePath: "src/assets/event1.png",
    secondaryImagePath: "src/assets/in-service1.png",
    summary: "Discover how high-impact interactive magic and mentalism transform standard corporate galas into unforgettable brand experiences.",
    content: [
      "Planning a corporate gala, rewards recognition event, or product launch requires far more than routine speeches and background music. Modern corporate audiences crave engagement, wonder, and shared moments of awe that break ice instantly and build strong connections.",
      "As a professional techno-magician and mentalist with over two decades of international performances for brands like Amazon AWS, YES Bank, LG, and Samsung, I have witnessed firsthand how customized illusions elevate corporate messaging. Whether seamlessly integrating a client's brand logo into high-tech iPad magic or predicting an executive's spontaneous choice onstage, magic bridges the gap between entertainment and strategic corporate storytelling.",
      "Interactive psychological illusions not only spark genuine laughter and wonder but also ignite conversations that linger for weeks after the event concludes. When guests participate directly in mind-reading routines, they feel personally connected, valued, and energized.",
    ],
    quote: "Magic is not just about tricks; it is about creating emotional connections and unforgettable memories that resonate with your audience long after the stage lights turn off.",
    youtubeVideoId: "XWexSwZE6js",
    videoTitle: "Magician Rajesh Kumar Live Corporate Performance Highlights",
  },
  {
    slug: "art-of-modern-mentalism",
    title: "The Art of Modern Mentalism: Reading Minds & Decoding Psychology",
    date: "August 28, 2026",
    category: "Mentalism",
    readTime: "6 min read",
    author: "Magician Rajesh Kumar",
    imagePath: "src/assets/event2.png",
    secondaryImagePath: "src/assets/in-service2.png",
    summary: "An insider look into psychological manipulation, body language decoding, and how mentalists create belief-defying stage moments.",
    content: [
      "Mentalism is often described as magic of the mind. Unlike traditional sleight of hand involving cards or coins, mentalism relies on subtle psychological cues, non-verbal communication analysis, intuitive deduction, and precise suggestion.",
      "During a mentalism performance, the artificial barrier between performer and spectator completely dissolves. When a mentalist reveals a private thought, a secret word, or a childhood memory chosen at random by a guest, the experience feels intensely personal, mysterious, and astonishing.",
      "In corporate workshops and stage galas across Mumbai, Delhi, Lonavala, and international venues, mentalism serves as a fascinating live demonstration of human perception and cognitive focus. It proves that mystery lives within human interaction.",
    ],
    quote: "The human mind is the most powerful stage of all. When you touch someone's genuine thoughts, you create an everlasting sense of magic.",
    youtubeVideoId: "BgpcHOwKw4k",
    videoTitle: "Exclusive Stage Mentalism & Mind Reading Demonstration",
  },
  {
    slug: "ipad-techno-magic",
    title: "Revolutionizing Stage Illusions with High-Tech iPad & Digital Magic",
    date: "August 10, 2026",
    category: "Techno Magic",
    readTime: "4 min read",
    author: "Magician Rajesh Kumar",
    imagePath: "src/assets/event3.png",
    secondaryImagePath: "src/assets/in-service4.png",
    summary: "Merging cutting-edge technology with classic optical illusions for tech summits, product launches, and digital expos.",
    content: [
      "Technology is evolving rapidly, and so is the world of magic. Techno Magic combines custom digital graphics, tablet interfaces, augmented reality elements, and physical sleight of hand to pull digital items directly into physical reality.",
      "At tech conferences, product unveilings, and corporate expos, pulling real physical items—such as new product models, coins, ribbons, or custom awards—straight out of a tablet screen creates an undeniable 'WOW' factor that captures social media attention.",
      "This innovative fusion captivates digital-first audiences and provides corporate sponsors with a unforgettable method to highlight key brand features in a theatrical, high-energy fashion.",
    ],
    quote: "Techno magic seamlessly bridges digital innovation with timeless mystery, proving that technology and magic speak the exact same language.",
    youtubeVideoId: "XWexSwZE6js",
    videoTitle: "Techno Magic & iPad Illusions Unveiled Live",
  },
  {
    slug: "interactive-stage-illusions",
    title: "How Interactive Stage Magic Guarantees Maximum Event Engagement",
    date: "July 22, 2026",
    category: "Stage Magic",
    readTime: "5 min read",
    author: "Magician Rajesh Kumar",
    imagePath: "src/assets/event4.png",
    secondaryImagePath: "src/assets/in-service5.png",
    summary: "Why audience participation and custom stage production are key to creating electrifying live event atmospheres.",
    content: [
      "Spectator participation is the true heartbeat of any memorable stage show. When audience members step into the spotlight alongside the magician, the energy inside the auditorium multiplies exponentially.",
      "From lighthearted comedy stage routines to dramatic illusion escapes, inviting attendees onto stage creates spontaneous, unscripted moments of joy and surprise that can never be duplicated.",
      "Whether performing at corporate galas in Novotel Hyderabad or luxury resort gatherings in Deolali Nashik, tailoring stage magic to highlight company VIPs leaves a joyful, lasting impression.",
    ],
    quote: "When the audience becomes an active part of the mystery, performance transcends entertainment and becomes a shared celebration.",
    youtubeVideoId: "BgpcHOwKw4k",
    videoTitle: "Grand Stage Illusion Showcase & Audience Highlights",
  },
];

// Static attribution used on every blog's quote block in BlogView.jsx (not per-blog data)
export const blogQuoteAttribution = "Magician Rajesh Kumar";

// =====================================================================
// TESTIMONIALS (8 unique reviews from TestimonialsMarquee.jsx — NOT tripled)
// =====================================================================

export const testimonials = [
  { name: "Pratik Bansode", rating: 5, text: "Very nice magician i also love his YouTube video" },
  { name: "Magician Anchal The Magic Girl", rating: 5, text: "Magic with technology... Creative and unique performance 👍" },
  { name: "Neeraj Bhuptani", rating: 5, text: "He is just amazing" },
  { name: "Deepak Park", rating: 5, text: "Saw him in Asian paints event... spoon bending magic and mental magic" },
  { name: "Amit Sharma", rating: 5, text: "Incredible corporate show! Left the entire audience completely speechless." },
  { name: "Priya Malhotra", rating: 5, text: "Mind blowing mentalism and close-up magic. Best performer we've ever hired!" },
  { name: "Vikram Mehta", rating: 5, text: "Highly engaging and energetic performance. Everyone kept talking about it all evening." },
  { name: "Rohan Kapoor", rating: 5, text: "Superb iPad magic and stage illusions! Truly world-class experience." },
];

// =====================================================================
// BRANDS (BrandsMarquee.jsx globs src/assets/brands/*.png at build time)
// Confirmed via `ls src/assets/brands/ | sort -V`: 47 files, brand1.png .. brand47.png,
// sequential with no gaps.
// =====================================================================

export const brandLogos = Array.from({ length: 47 }, (_, i) => ({
  imagePath: `src/assets/brands/brand${i + 1}.png`,
  sortOrder: i,
}));

export const brandsHeading = {
  tag: "A selection",
  heading: "BRANDS RAJESH WORK WITH",
};
