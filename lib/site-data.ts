import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  type LucideIcon,
  Code2,
  Database,
  Cpu,
  Sparkles,
  Video,
  Image as ImageIcon,
  PenTool,
  Printer,
} from "lucide-react";

/**
 * Single source of truth for all site copy. Sourced from the client's
 * `Contexts/portfolio structure.pdf`. Edit here to update the site.
 */

export const profile = {
  name: "ECHO",
  fullName: "Echo John Calderon",
  badge: "Mechatronics Servicing Certified",
  headline:
    "Software Developer, Electronics Enthusiast & Creative Content Creator",
  // Hero terminal tagline (professional tone).
  tagline:
    "Engineering full-stack software and embedded systems for enterprise solutions.",
  intro:
    "I build software solutions, develop electronics projects, create engaging visual content, and help businesses and individuals bring their ideas to life through technology and design.",
};

export const about = {
  paragraphs: [
    "Hello! I’m Echo, a full-stack developer and electronics engineer dedicated to building high-performance software and scalable hardware solutions.",
    "I have experience in software development, embedded systems, databases, and electronics projects such as management systems, IoT devices, robotics, and trading tools. I enjoy turning ideas into functional and useful systems.",
    "I hold a Mechatronics Servicing NC II certification from the Technical Education and Skills Development Authority, which strengthened my skills in electronics, mechanical systems, and automation.",
    "Alongside development work, I also offer video editing, photo editing, graphic design, and printing services for students, creators, and small businesses. I focus on creating clean, effective, and engaging digital content.",
  ],
};

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming & Development",
    icon: Code2,
    skills: [
      "Java",
      "JavaFX",
      "MySQL",
      "Supabase",
      "HTML",
      "CSS",
      "JavaScript",
      "Git & GitHub",
    ],
  },
  {
    title: "Database & Backend",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "Database Design",
      "Authentication Systems",
      "API Integration",
    ],
  },
  {
    title: "Electronics & Engineering",
    icon: Cpu,
    skills: [
      "Arduino",
      "ESP32",
      "Sensors & Automation",
      "Embedded Systems",
      "PLC Ladder Logic",
      "PLC Basic Programming",
      "Circuit Design",
    ],
  },
  {
    title: "Creative Services",
    icon: Sparkles,
    skills: [
      "Video Editing",
      "Photo Editing",
      "Graphic Design",
      "Motion Graphics",
      "Social Media Content",
      "Printing Services",
    ],
  },
];

export interface Project {
  title: string;
  technologies: string[];
  description: string;
  features: string[];
  // TODO: replace with a real screenshot in /public when the client provides one.
  image?: string;
}

export const projects: Project[] = [
  {
    title: "MLM Management Platform",
    technologies: ["Supabase", "Web Technologies"],
    description: "A multi-level marketing platform featuring:",
    features: [
      "Binary/genealogy tree visualization",
      "Wallet management",
      "Commission tracking",
      "Member registration",
      "Code-based activation system",
      "Admin dashboard",
    ],
  },
];

export interface Service {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const services: Service[] = [
  {
    title: "Video Editing",
    icon: Video,
    items: [
      "Promotional Videos",
      "Social Media Reels",
      "School Projects",
      "Business Advertisements",
      "YouTube Content",
    ],
  },
  {
    title: "Photo Editing",
    icon: ImageIcon,
    items: ["Retouching", "Product Photos", "Event Photos", "Social Media Graphics"],
  },
  {
    title: "Graphic Design",
    icon: PenTool,
    items: [
      "Posters",
      "Flyers",
      "Banners",
      "Social Media Posts",
      "Business Materials",
    ],
  },
  {
    title: "Printing Services",
    icon: Printer,
    items: [
      "Documents",
      "Flyers",
      "Posters",
      "Marketing Materials",
      "Academic Requirements",
    ],
  },
];

export const certification = {
  title: "Mechatronics Servicing NC II",
  issuer: "Technical Education and Skills Development Authority (TESDA)",
  issued: "December 15, 2025",
  validUntil: "December 14, 2030",
  image: "/certificate.png",
  competencies: [
    "Installing and configuring mechatronics devices",
    "Configuring and programming PLC (Programmable Logic Controller) systems",
    "Troubleshooting electronic, hydraulic, and pneumatic circuits",
    "Terminating and connecting electrical wiring and control panels",
  ],
  experience: [
    "Academic projects",
    "Freelance work",
    "Electronics competitions",
    "Client projects",
  ],
};

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  display: string;
}

export const contact = {
  email: "echojohnc@gmail.com",
  socials: [
    {
      label: "Email",
      href: "mailto:echojohnc@gmail.com",
      icon: Mail,
      display: "echojohnc@gmail.com",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61581791588294",
      icon: Facebook,
      display: "Echo John Calderon",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/echo-calderon-518146415",
      icon: Linkedin,
      display: "echo-calderon",
    },
    {
      label: "GitHub",
      href: "https://github.com/ekk0448",
      icon: Github,
      display: "ekk0448",
    },
  ] as SocialLink[],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
