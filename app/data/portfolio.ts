// app/data/portfolio.ts

import { StaticImageData } from "next/image";
import profileImage from "../assets/profile.png";

import ConkerDashboard1 from "../assets/ConkerTweaksDashboard1.png";
import ConkerHome from "../assets/ConkerTweaksHome.png";
import ConkerHomeDash2 from "../assets/ConkerTweaksHomeDashboard2.png";
import ConkerProfile from "../assets/ConkerTweaksProfile.png";
import RustalyticsImg from "../assets/Rustalytics.png";
import PocketCoderHome from "../assets/HomeBanner.png";
import PocketCoderEdit from "../assets/EditorBanner.png";
import PocketCoderChat from "../assets/ChatBanner.png";
import PocketCoderConsole from "../assets/ConsoleBanner.png";
import Bitcoin from "../assets/bitcoin.png";
import Scraper from "../assets/SteamScraper.png";
import Inventory from "../assets/Inventory.png";



export type LinkSet = {
  github: string;
  email: string;
  image: StaticImageData; 
  phone?: string;
  website?: string;
  linkedin?: string;
  location?: string;
};

export type EducationItem = {
  qualification: string;
  institution: string;
  period: string;
  location?: string;
  status?: string;
};

export type ExperienceItem = {
  title: string;
  company: string;
  location?: string;
  period: string;
  employmentType?: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Remote";
  highlights: string[];
};

export type ProjectItem = {
  name: string;
  period?: string;
  description: string;
  tech: string[];
  notes?: string[];
  images?: StaticImageData[];
  links?: {
    github?: string;
    live?: string;
  };
};

export type AchievementItem = {
  name: string;
  description: string;
  year?: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillIcons: Record<string, string> = {
  Python: "/icons/python.svg",
  JavaScript: "/icons/javascript.svg",
  SQL: "/icons/sql.svg",
  "SQL (MySQL)": "/icons/sql.svg",
  PHP: "/icons/php.svg",
  "C++": "/icons/cpp.svg",
  Lua: "/icons/lua.svg",
  HTML: "/icons/html.svg",
  CSS: "/icons/css.svg",
  React: "/icons/react.svg",
};

export type PortfolioData = {
  name: string;
  headline: string;
  links: LinkSet;
  summary: string;
  experience: ExperienceItem[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  languages: string[];
};

export const portfolio: PortfolioData = {
  name: "Peter Papasotiriou",
  headline: "Software Engineer | Full Stack Developer",
  links: {
    location: "Benoni, Johannesburg, South Africa",
    phone: "+27 61 885 9020",
    email: "peterpapasotiriou04@gmail.com",
    github: "https://github.com/PeterTech-Dev",
    linkedin: "https://www.linkedin.com/in/peter-papasotiriou-192286305/",
    website: "/PeterPapasotiriouCV.pdf",
    image: profileImage,
  },

  summary:
    "Software Engineer with hands-on experience building Python-based backend systems, automation tools, and full-stack web applications. Experienced in designing REST APIs, working with relational databases, and delivering real-world solutions through personal and professional projects. Strong focus on maintainable code, system design, and problem-solving.",

  experience: [
    {
      title: "Manager & Internal Tools Developer",
      company: "Africa Paradise Boutique Hotel",
      period: "2023 – Present",
      location: "Benoni, Johannesburg",
      employmentType: "Full-time",
      highlights: [
        "I managed hotel staff and supported daily operations by resolving technical and operational issues as they arose. Alongside front-desk responsibilities, I provided technical support and developed internal tools—such as Excel automations and Python-based booking information systems—to improve efficiency, productivity, and workflow reliability. These improvements helped streamline processes and ensured the hotel operated smoothly and consistently.",
      ],
    },
    {
      title: "Kids Counsellor",
      company: "Sugar Bay Holiday Resort",
      period: "Dec 2023 – Jan 2025",
      employmentType: "Part-time",
      location: "Zinkwazi, Durban",
      highlights: [
        "In addition to my full-time position as a hotel manager, I worked as a counselor at Sugar Bay, supervising and supporting children through structured activities . The role provided a meaningful balance to my professional responsibilities and allowed me to make a positive impact by creating a fun, safe environment where children felt supported and inspired.",
      ],
    },
    {
      title: "Software Engineer",
      company: "Freelance / Personal Projects",
      period: "Present",
      location: "Benoni / Remote",
      employmentType: "Freelance",
      highlights: [
        "I built real-world tools and web applications focused on simplifying tasks and improving efficiency. By taking on smaller freelance projects alongside full-time work, I gained hands-on experience, strengthened my problem-solving skills, and consistently delivered functional, user-focused solutions.",
      ],
    },
  ],

  projects: [
    {
      name: "Conker Tweaks Website",
      period: "May 2025",
      description:
        "Full-stack web platform with secure authentication, product/package management, and payment-ready flows backed by a relational database and admin tools.",
      tech: ["Python", "FastAPI", "SQLite", "Stripe"],
      images: [ConkerHome, ConkerDashboard1, ConkerHomeDash2, ConkerProfile],
      links: {
        github: "https://github.com/PeterTech-Dev/Conker-Tweaks",
      },
    },
    {
      name: "Pocket Coder",
      description:
        "Mobile-friendly coding workspace concept with an IDE-style UI, assistant features, and multiple tool panels (editor, console, chat) designed for quick dev workflows.",
      tech: ["Kotlin", "Python", "UI/UX", "API Design"],
      images: [PocketCoderHome, PocketCoderChat, PocketCoderEdit, PocketCoderConsole],
      links: {
        github: "https://github.com/PeterTech-Dev/Pocket-Coder",
      },
    },
    {
      name: "Rustalytics",
      description:
        "Real-time Rust server monitoring tool that watches events like orders and vending changes, then formats and posts clean alerts for fast moderation and tracking.",
      tech: ["Python", "REST APIs", "Automation", "Webhooks"],
      images: [RustalyticsImg],
      links: {
        github: "https://github.com/PeterTech-Dev/Rustalytics",
      },
    },
    {
      name: "Algorithmic Bitcoin Trader",
      period: "Mar – May 2025",
      description:
        "Private trading assistant that combines rule-based signals with pattern analysis to help evaluate entries/exits and reduce noise during volatile market movement.",
      tech: ["Python", "Pandas", "Backtesting", "Data Analysis"],
      images: [Bitcoin],
      notes: ["Client-only / private delivery"],
    },
    {
      name: "Steam Inventory Calculator",
      period: "Apr 2025",
      description:
        "Data pipeline that collects Steam market prices, cleans/normalizes results, and generates inventory valuation reports with export-ready summaries.",
      tech: ["Python", "Web Scraping", "CSV Export", "Data Cleaning"],
      images: [Inventory],
      links: {
        github: "https://github.com/PeterTech-Dev/Steam-Friends-Inventory-Checker",
      },
    },
    {
      name: "Steam Price Scraper",
      description:
        "Automation script that extracts pricing data, validates results, and outputs structured datasets for further analysis and reporting.",
      tech: ["Python", "Requests", "Parsing", "Automation"],
      images: [Scraper],
      links: {
        github: "https://github.com/PeterTech-Dev/Steam-Price-Scraper",
      },
    },
  ],


  achievements: [
    {
      name: "Golden Key International Honour Society — Member",
      description:
        "Invited based on top-tier academic performance at university.",
    },
    {
      name: "Debutantes & Squires Programme (2021)",
      description:
        "Completed a structured programme of community service, fundraising, etiquette, and leadership events.",
      year: "2021",
    },
    {
      name: "Half Colours — Academics",
      description:
        "School award for consistent high academic results over the year.",
    },
    {
      name: "Certificate of Excellence — Mathematics & Computer Applications Technology",
      description:
        "Formal recognition for outstanding achievement in both subjects.",
    },
  ],

  education: [
    {
      qualification:
        "Bachelor of Science in Information Technology (Software Engineering)",
      institution: "Eduvos Bedfordview",
      period: "2023 – 2025",
      location: "Benoni, Johannesburg",
      status: "Completed",
    },
    {
      qualification: "National Senior Certificate (Matric)",
      institution: "Ashton International College",
      period: "2017 – 2023",
      location: "Benoni, Johannesburg",
      status: "Completed",
    },
  ],

  skills: [
    {
      title: "Languages",
      items: ["Python", "JavaScript", "SQL (MySQL)", "PHP", "C++", "Lua"],
    },
    {
      title: "Backend & APIs",
      items: ["Django", "RESTful APIs", "API Gateways"],
    },
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Databases",
      items: ["MySQL", "MongoDB"],
    },
  ],

  languages: ["English"],
};
