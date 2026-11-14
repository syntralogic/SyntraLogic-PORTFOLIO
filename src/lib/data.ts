import {
  Code,
  Server,
  Smartphone,
  Wrench,
  Layout,
  Shield,
  Zap,
  Cpu,
  MessageSquare,
  HeadphonesIcon,
  FileCode,
  Globe,
  Database,
  Cloud,
  Link,
  Lock,
  Settings,
  Scissors,
  Repeat,
  type LucideIcon,
} from "lucide-react";

import synergy from "../assets/synergy.webp";
import shopire from "../assets/shopire.webp";
import pawdeal from "../assets/pawdeal.webp";
import kinetic from "../assets/kinetic.webp";
import digitalleads from "../assets/digitalleads.webp";

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Technologies", href: "#technologies" },
  { label: "Testimonials", href: "#testimonials" },
  {
    label: "Work With Us",
    href: "#clients",
    children: [
      { label: "Hire Us (Clients)", href: "#clients" },
      { label: "Client Hunters", href: "#client-hunters" },
    ],
  },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

// Extra links shown only in the footer (kept out of the main navbar to avoid clutter).
export const footerExtraLinks: NavLink[] = [
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Client Hunters", href: "#client-hunters" },
];

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { value: 3, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 25, suffix: "+", label: "Technologies Mastered" },
];

export interface Value {
  title: string;
  description: string;
}

export const values: Value[] = [
  {
  title: "Mission",
  description:
    "To engineer scalable, secure, and high-performance software solutions that empower businesses to grow and innovate in a digital world.",
},
{
  title: "Vision",
  description:
    "To become a trusted global technology partner known for delivering world-class software products, APIs, and business systems.",
},
{
  title: "Core Values",
  description:
    "Quality, transparency, continuous learning, client success, and long-term partnerships drive everything we build.",
},
{
  title: "Innovation",
  description:
    "We embrace emerging technologies and modern architectures to deliver future-proof solutions that keep our clients ahead of the curve.",
},
];

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const services: Service[] = [
  {
    id: "web",
    title: "Website Development",
    icon: Code,
    items: [
      "Business Websites",
      "Corporate Websites",
      "Portfolio Websites",
      "Personal Websites",
      "Landing Pages",
      "E-Commerce Websites",
      "Marketplace Platforms",
      "Multi-Vendor Marketplaces",
      "SaaS Platforms",
      "CRM Systems",
      "ERP Systems",
      "POS Systems",
      "HR Management Systems",
      "School Management Systems",
      "College Management Systems",
      "University Portals",
      "Hospital Management Systems",
      "Clinic Management Systems",
      "Travel & Tourism Systems",
      "Hotel Management Systems",
      "Restaurant Management Systems",
      "Food Ordering Platforms",
      "Inventory Management Systems",
      "Warehouse Management Systems",
      "Accounting Systems",
      "Billing Systems",
      "Booking & Reservation Systems",
      "Appointment Systems",
      "Event Management Platforms",
      "Job Portals",
      "Recruitment Platforms",
      "News Portals",
      "Blogs",
      "CMS Websites",
      "Forums",
      "Community Platforms",
      "Social Media Platforms",
      "Chat Applications",
      "Video Streaming Platforms",
      "Music Streaming Platforms",
      "Subscription Platforms",
      "Real Estate Platforms",
      "Property Management Systems",
      "Learning Management Systems (LMS)",
      "Examination Systems",
      "Online Course Platforms",
      "Dashboards",
      "Admin Panels",
      "Analytics Platforms",
      "Finance Dashboards",
      "Banking Portals",
      "Insurance Platforms",
      "Custom Web Applications",
      "Progressive Web Apps (PWA)",
    ],
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    items: [
      "REST APIs",
      "GraphQL APIs",
      "Authentication Systems",
      "Authorization Systems",
      "Database Design",
      "Payment Integration",
      "Third-party API Integration",
      "Cloud Backend",
      "Microservices",
      "WebSocket Applications",
      "Queue Systems",
      "Server Architecture",
    ],
  },
  {
    id: "mobile",
    title: "Mobile Development",
    icon: Smartphone,
    items: ["Flutter Applications", "Cross-platform Apps", "Backend for Mobile Apps"],
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    icon: Wrench,
    items: [
      "Website Maintenance",
      "Bug Fixing",
      "Performance Optimization",
      "Security Updates",
      "Feature Development",
      "Database Optimization",
      "Server Management",
      "Deployment",
      "CI/CD Pipelines",
    ],
  },
];

export interface Reason {
  title: string;
  icon: LucideIcon;
  description: string;
}

export const reasons: Reason[] = [
  {
    title: "Clean Architecture",
    icon: Layout,
    description: "We design modular systems that are easy to extend, test, and maintain over time.",
  },
  {
    title: "Scalable Solutions",
    icon: Database,
    description: "Our solutions grow with your business, from startup MVP to enterprise workloads.",
  },
  {
    title: "Secure Development",
    icon: Shield,
    description: "Security is embedded in every layer, from authentication to data handling.",
  },
  {
    title: "Performance Optimization",
    icon: Zap,
    description: "We prioritize fast load times, efficient queries, and smooth user experiences.",
  },
  {
    title: "Modern Technologies",
    icon: Cpu,
    description: "We use proven, cutting-edge stacks that match your project goals.",
  },
  {
    title: "Professional Communication",
    icon: MessageSquare,
    description: "Transparent updates, clear timelines, and collaborative decision-making.",
  },
  {
    title: "Long-term Support",
    icon: HeadphonesIcon,
    description: "We stay with you after launch with maintenance, updates, and improvements.",
  },
  {
    title: "Clean Maintainable Code",
    icon: FileCode,
    description: "Readable, documented code that future developers can understand and extend.",
  },
  {
    title: "API-first Development",
    icon: Link,
    description: "We build robust APIs that power web, mobile, and third-party integrations.",
  },
  {
    title: "Cross-platform Solutions",
    icon: Globe,
    description: "One codebase, multiple platforms, consistent experience across devices.",
  },
];

export interface PortfolioProject {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
}

export const projects: PortfolioProject[] = [
  {
    id: "kineticOS",
    name: "Kinetic OS",
    category: "SaaS",
    description:
      "AI-powered platform for lead management, automation, and multi-channel customer engagement.",
    image: kinetic,
    stack: ["React", "Typescript","Node.js", "JavaScript", "PostgreSQL","Render"],
    liveUrl: "https://kinetic-os-frontend.vercel.app/",
    repoUrl: "https://github.com/syntralogic/",
  },
    {
    id: "digitalleads",
    name: "DigitalLeads",
    category: "SaaS",
    description:
      "Affiliate marketing and lead-tracking platform for managing offers, clicks, conversions, and campaign analytics.",
    image: digitalleads,
    stack: ["React", "Typescript","Node.js", "JavaScript", "PostgreSQL","Render"],
    liveUrl: "https://digitalleads.vercel.app/",
    repoUrl: "https://github.com/syntralogic/",
  },
  {
    id: "shopire",
    name: "Shopire",
    category: "E-commerce",
    description:
      "Cloud-based e-commerce platform with customer dealing and payment records.",
    image: shopire,
    stack: ["HTML", "CSS","Node.js", "JavaScript", "MongoDB","Render"],
    liveUrl: "https://shopire-frontend.vercel.app/",
    repoUrl: "https://github.com/syntralogic/shopire-backend",
  },
  {
    id: "synergy-social",
    name: "SynergySocial",
    category: "Social Platform",
    description:
      "A scalable public relationship management system built for communication with real-time analytics.",
    image: synergy,
    stack: ["React.js", "Node.js", "JavaScript", "PostgreSQL","TypeScript"],
    liveUrl: "https://synergy-social-frontend.vercel.app/",
    repoUrl: "https://github.com/syntralogic/Social-Web-Backend",
  },
  {
    id: "pawdeal",
    name: "Pawdeal",
    category: "Pet Store",
    description:
      "Multi-user pet retail platform with secure payments, inventory, and dashboards.",
    image: pawdeal,
    stack: ["React.js", "Node.js", "JavaScript", "MySQL","TypeScript"],
    liveUrl: "https://pawdeal-frontend.vercel.app",
    repoUrl: "https://github.com/syntralogic/PawDeal-Backend",
  },
];

export interface UpcomingProject {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
  stack: string[];
  status: string;
}

export const upcomingProjects: UpcomingProject[] = [
  {
    id: "tailorhub",
    name: "TailorHub",
    category: "Marketplace",
    description:
      "Tailoring marketplace connecting buyers and sellers, with separate buyer, seller and admin dashboards, secure authentication and an AI chatbot.",
    icon: Scissors,
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    status: "In Development",
  },
  {
    id: "skillswap",
    name: "SkillSwap",
    category: "Mobile App",
    description:
      "Peer-to-peer skill exchange app where people can offer what they know and learn something new in return.",
    icon: Repeat,
    stack: ["Android", "Node.js", "REST API"],
    status: "Coming Soon",
  },
];

// DEMO CONTENT: these are placeholder testimonials from fictional people.
// Replace them with real client quotes (and set SHOW_DEMO_NOTICE to false) before going live.
export const SHOW_DEMO_NOTICE = true;

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  project: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "The team understood our lead-management workflow right away and delivered a clean, fast platform. Updates were clear and deadlines were met.",
    name: "Daniel Carter",
    role: "Operations Lead",
    project: "Kinetic OS",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "Our online store went from idea to launch in a few weeks. Payments and inventory just work, and support after launch has been great.",
    name: "Ayesha Malik",
    role: "Founder",
    project: "Shopire",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Professional communication and tidy code. The dashboards gave us the analytics we needed without any extra complexity.",
    name: "Omar Siddiqui",
    role: "Marketing Manager",
    project: "DigitalLeads",
    rating: 5,
  },
];

export interface TechnologyCategory {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const technologyCategories: TechnologyCategory[] = [
  {
    title: "Frontend",
    icon: Layout,
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Nuxt.js",
      "Angular",
      "Svelte",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "Shadcn/UI",
      "Chakra UI",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "Express.js", "NestJS", "PHP", "Laravel", "Python", "Django", "FastAPI", "ASP.NET Core"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    items: ["Flutter", "React Native"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MongoDB", "PostgreSQL", "MySQL", "MariaDB", "SQLite", "Firebase", "Redis", "Supabase"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Vercel",
      "Netlify",
      "AWS",
      "Azure",
      "Google Cloud",
      "Cloudflare",
      "Linux",
      "Nginx",
    ],
  },
  {
    title: "APIs & Integrations",
    icon: Link,
    items: [
      "REST API",
      "GraphQL",
      "EmailJS",
      "Stripe",
      "PayPal",
      "Razorpay",
      "Google Maps API",
      "Firebase",
      "Twilio",
      "OpenAI API",
    ],
  },
  {
    title: "Authentication",
    icon: Lock,
    items: ["JWT", "OAuth", "Firebase Authentication", "Clerk", "Auth.js", "Supabase Auth"],
  },
  {
    title: "Tools",
    icon: Settings,
    items: ["VS Code", "Postman", "npm", "pnpm", "Yarn", "GitHub Desktop"],
  },
];

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What services does SyntraLogic provide?",
    answer:
      "We specialize in software development, including web applications, APIs, mobile apps, SaaS platforms, business systems, backend architecture, and ongoing maintenance.",
  },
  {
    question: "How much does software development cost?",
    answer:
      "Cost depends on project scope, features, and timeline. We provide custom quotes after understanding your requirements during a free consultation.",
  },
  {
    question: "How long does development take?",
    answer:
      "Timelines vary by complexity. A simple MVP may take 4–8 weeks, while large enterprise systems can take several months. We define milestones upfront.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes. We offer support packages that include bug fixes, security updates, performance optimization, feature additions, and infrastructure management.",
  },
  {
    question: "Which technologies do you specialize in?",
    answer:
      "We work with React, Next.js, TypeScript, Node.js, NestJS, Python, FastAPI, Flutter, PostgreSQL, MongoDB, Supabase, AWS, Docker, and many more.",
  },
  {
    question: "Can businesses worldwide work with SyntraLogic?",
    answer:
      "Absolutely. We collaborate with clients globally using modern communication tools and flexible working hours.",
  },
  {
    question: "How do I start a project?",
    answer:
      "Fill out the project inquiry form in our Clients section or contact us directly. We will schedule a discovery call and prepare a tailored proposal.",
  },
  {
    question: "How can I become a Client Hunter?",
    answer:
      "Apply through the Client Hunters section. Once approved, you can refer projects and earn commissions on successful deals.",
  },
];

export const companyInfo = {
  name: "SyntraLogic",
  email: import.meta.env.VITE_COMPANY_EMAIL || "logicsyntra@gmail.com",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "+92 370 8898722",
  github: import.meta.env.VITE_GITHUB_URL || "https://github.com/syntralogic",
  linkedin: import.meta.env.VITE_LINKEDIN_URL || "https://www.linkedin.com/in/syntra-logic-030696423/",
  phoneLabel: "+92 370 8898722",
  address: "Remote-first, serving clients worldwide",
};

export const projectTypes = [
  "Web Application",
  "Mobile Application",
  "SaaS Product",
  "API / Backend",
  "E-Commerce Platform",
  "Enterprise System",
  "Maintenance & Support",
  "Other",
];

export const budgetRanges = ["$1,000 - $5,000", "$5,000 - $15,000", "$15,000 - $50,000", "$50,000+", "Not sure"];

export const timelines = ["Less than 1 month", "1-3 months", "3-6 months", "6+ months", "Flexible"];