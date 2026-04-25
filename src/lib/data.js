const IMG =
  "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/other/";

export const IMAGES = {
  logo: IMG + "logo.webp",
  logoDark:
    "https://storage.googleapis.com/accredian-assets/Frontend_Assests/Images/Accredian-react-site-images/logo/accredainnew.webp",
  hero: IMG + "corporate-big-hero-v4.webp",
  edgeDesktop: IMG + "accredian-edge-usp-v3.svg",
  edgeMobile: IMG + "accredian-edge-usp-mobile.svg",
  catV2: IMG + "catV2.svg",
  imageHuman: IMG + "imagehuman.png",
  // clients
  rel: IMG + "rel.png",
  hcl: IMG + "hcl.png",
  ibm: IMG + "ibm.png",
  crif: IMG + "crif.png",
  adp: IMG + "adp.svg",
  bayer: IMG + "bayer.svg",
  // course cards
  projectMgmt: IMG + "project-management-v2.webp",
  digitalTrans: IMG + "digital-transformation-v2.webp",
  dataScience: IMG + "data-science-v2.webp",
  seniorMgmt: IMG + "senior-management-v2.webp",
};

// ── Nav links (exact from DOM) ──────────────────────────────────────────────
export const navLinks = [
  { id: "home", title: "Home", href: "#home" },
  { id: "stats", title: "Stats", href: "#stats" },
  { id: "clients", title: "Clients", href: "#clients" },
  { id: "accredianEdge", title: "Accredian Edge", href: "#accredianEdge" },
  { id: "cat", title: "CAT", href: "#cat" },
  { id: "howItWorks", title: "How It Works", href: "#howItWorks" },
  { id: "faqs", title: "FAQs", href: "#faqs" },
  { id: "testimonials", title: "Testimonials", href: "#testimonials" },
];

// ── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  {
    value: "10K+",
    label: "Professionals trained for exceptional career success",
  },
  {
    value: "200+",
    label: "Sessions delivered with unmatched learning excellence",
    last: false,
  },
  {
    value: "5K+",
    label: "Active learners engaged in dynamic courses",
    last: true,
  },
];

// ── Clients ─────────────────────────────────────────────────────────────────
export const clients = [
  { id: "client-1", src: IMAGES.rel, alt: "Reliance" },
  { id: "client-3", src: IMAGES.hcl, alt: "HCL" },
  { id: "client-4", src: IMAGES.ibm, alt: "IBM" },
  { id: "client-5", src: IMAGES.crif, alt: "CRIF" },
  { id: "client-6", src: IMAGES.adp, alt: "ADP" },
  { id: "client-2", src: IMAGES.bayer, alt: "Bayer" },
];

// ── Domain Expertise cards ───────────────────────────────────────────────────
export const domainCards = [
  { label: "Product & Innovation Hub", icon: "lightbulb" },
  { label: "Gen-AI Mastery", icon: "brain" },
  { label: "Leadership Elevation", icon: "users" },
  { label: "Tech & Data Insights", icon: "chart" },
  { label: "Operations Excellence", icon: "settings" },
  { label: "Digital Enterprise", icon: "globe" },
  { label: "Fintech Innovation Lab", icon: "banknote" },
];

// ── Course Segmentation (swiper slides) ─────────────────────────────────────
export const courseSlides = [
  {
    img: IMAGES.projectMgmt,
    alt: "Program Specific",
    label: "Program Specific",
    description: "Certificate, Executive, Post Graduate Certificate",
  },
  {
    img: IMAGES.digitalTrans,
    alt: "Industry Specific",
    label: "Industry Specific",
    description: "IT, Healthcare, Retail, Finance, Education, Manufacturing",
  },
  {
    img: IMAGES.dataScience,
    alt: "Topic Specific",
    label: "Topic Specific",
    description: "Machine Learning, Design, Analytics, Cybersecurity, Cloud",
  },
  {
    img: IMAGES.seniorMgmt,
    alt: "Level Specific",
    label: "Level Specific",
    description: "Senior Leadership, Mid-Career Professionals, Freshers",
  },
];

// ── Who Should Join ──────────────────────────────────────────────────────────
export const whoJoin = [
  {
    icon: "monitor-check",
    title: "Tech Professionals",
    desc: "Enhance expertise, embrace tech, drive innovation.",
  },
  {
    icon: "monitor-x",
    title: "Non-Tech Professionals",
    desc: "Adapt digitally, collaborate in tech environments.",
  },
  {
    icon: "graduation-cap",
    title: "Emerging Professionals",
    desc: "Develop powerful skills for rapid career growth.",
  },
  {
    icon: "briefcase",
    title: "Senior Professionals",
    desc: "Strengthen leadership, enhance strategic decisions.",
  },
];

// ── How It Works ─────────────────────────────────────────────────────────────
export const howItWorks = [
  {
    step: 1,
    icon: "chart-combined",
    title: "Skill Gap Analysis",
    desc: "Assess team skill gaps and developmental needs.",
    icon_type: "chart-combined",
  },
  {
    step: 2,
    icon: "presentation",
    title: "Customized Training Plan",
    desc: "Create a tailored roadmap addressing organizational goals.",
    icon_type: "presentation",
  },
  {
    step: 3,
    icon: "monitor-play",
    title: "Flexible Program Delivery",
    desc: "Deliver adaptable programs aligned with industry and organizational needs.",
    icon_type: "monitor-play",
  },
];

// ── FAQs ─────────────────────────────────────────────────────────────────────
export const faqCategories = [
  "About the Course",
  "About the Delivery",
  "Miscellaneous",
];

export const faqs = {
  "About the Course": [
    {
      q: "What types of corporate training programs does Accredian offer?",
      a: "Accredian provides industry-specific, customizable training programs tailored to meet your organization's unique needs, covering domains like leadership, tech, data, and fintech.",
    },
    {
      q: "What domain specializations are available?",
      a: "We offer expertise in various domains, including Leadership Development, Tech & Data, Fintech, Digital Business, Product Innovation, Operations Management, and Generative AI.",
    },
    {
      q: "Are programs available online or in-person?",
      a: "We offer flexible delivery options including fully online, in-person, and hybrid formats to suit your team's geographic distribution and schedule.",
    },
  ],
  "About the Delivery": [
    {
      q: "How are training sessions delivered?",
      a: "Training is delivered through live instructor-led sessions, self-paced modules, and cohort-based learning — customized based on your team's needs.",
    },
    {
      q: "What is the typical duration of a program?",
      a: "Programs range from intensive 1-day workshops to multi-month learning journeys, depending on the depth of skill development required.",
    },
  ],
  Miscellaneous: [
    {
      q: "Can we customize the curriculum?",
      a: "Absolutely. Every program is co-designed with your L&D team to address your specific skill gaps, tech stack, and organizational goals.",
    },
    {
      q: "How do you measure ROI?",
      a: "We provide a live analytics dashboard tracking completion rates, assessment scores, engagement metrics, and business impact indicators.",
    },
  ],
};

// ── Testimonials ──────────────────────────────────────────────────────────────
export const testimonials = [
  {
    logo: IMAGES.adp,
    alt: "ADP",
    text: '"We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."',
  },
  {
    logo: IMAGES.bayer,
    alt: "Bayer",
    text: '"Accredian\'s commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."',
  },
  {
    logo: IMAGES.rel,
    alt: "Reliance",
    text: '"Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees."',
  },
];
