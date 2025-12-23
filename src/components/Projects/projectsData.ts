export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  status: "Completed" | "In Progress";
  image: string;
  tags: string[];
  stack?: string[];
  link?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 1,
    title: "Arali Group Landing Page",
    subtitle: "High-converting Web Design",
    description:
      "Marketing site focused on conversion: fast, SEO-optimized, mobile-first, and accessible.",
    status: "Completed",
    image: "/images/projects/landing.jpg",
    tags: ["SEO Optimized", "Fast Loading", "Mobile-First"],
    stack: ["Figma", "React"],
    link: "#",
  },
  {
    id: 2,
    title: "Arali Group CRM",
    subtitle: "Enterprise CRM System",
    description:
      "Operations-grade CRM with pipeline tracking, analytics dashboards, and automated workflows.",
    status: "Completed",
    image: "/images/projects/crm.png",
    tags: ["Analytics Dashboard", "Automation", "Role-Based Access"],
    stack: ["Figma", "Next.js"],
    link: "#",
  },
  {
    id: 3,
    title: "N‑Movers CRM",
    subtitle: "Load & User Management",
    description:
      "Operations CRM tailored for N‑Movers: load management, dispatch workflows, user/role management, and granular permissions.",
    status: "In Progress",
    image: "/images/projects/n-movers.jpg",
    tags: ["Loads", "Dispatch", "RBAC", "Workflows"],
    stack: ["Figma", "Next.js"],
    link: "#",
  },
  {
    id: 4,
    title: "N‑Movers Mobile",
    subtitle: "Real‑time Tracking App",
    description:
      "Cross‑platform mobile app for N‑Movers with live location tracking, job updates, and driver notifications.",
    status: "In Progress",
    image: "/images/projects/mobile-project.jpg",
    tags: ["Mobile", "Tracking", "Notifications"],
    stack: ["React Native"],
    link: "#",
  },
  {
    id: 5,
    title: "Home Rehab Landing Page",
    subtitle: "Healthcare Service Website",
    description:
      "Landing page for a home rehabilitation and physiotherapy service, built with modern technologies and best practices.",
    status: "In Progress",
    image: "/images/projects/home-rehab.jpg",
    tags: ["Healthcare", "Landing Page", "Responsive", "Accessibility"],
    stack: ["Figma", "React"],
    link: "#",
  },
  {
    id: 6,
    title: "Cyped Security Landing Page",
    subtitle: "System Security Service Website",
    description:
      "Landing page for a system security service, designed to build trust and drive bookings with clear service sections",
    status: "In Progress",
    image: "/images/projects/selo-home.jpg",
    tags: ["IT Security", "Landing Page", "Responsive", "Accessibility"],
    stack: ["Figma", "React"],
    link: "#",
  },
];
