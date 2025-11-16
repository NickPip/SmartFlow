export interface ProjectItem {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  status: "Completed" | "In Progress";
  image: string;
  tags: string[];
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
    link: "#",
  },
];


