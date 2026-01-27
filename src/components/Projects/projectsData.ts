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
  detailedDescription?: string;
  features?: string[];
  backendInfo?: string;
  adminPanelInfo?: string;
  screenshots?: string[];
  technicalDetails?: {
    architecture?: string;
    database?: string;
    deployment?: string;
    api?: string;
  };
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
    stack: ["Figma", "React", "Next.js"],
    link: "#",
    detailedDescription:
      "A comprehensive marketing website built with modern web technologies. The platform features a fully dynamic content management system that allows administrators to manage all content, add or remove projects, and update project statuses (ongoing and completed) directly from an intuitive admin panel.",
    features: [
      "Full Backend Integration with RESTful API",
      "Admin Panel for Content Management",
      "Dynamic Project Management (Add/Remove/Update)",
      "Content Editor for All Page Sections",
      "SEO Optimization with Meta Tags Management",
      "Fast Loading with Image Optimization",
      "Responsive Design for All Devices",
      "Accessibility Compliance (WCAG 2.1)",
    ],
    backendInfo:
      "Built with a robust backend system that provides RESTful APIs for content management. The admin panel allows real-time updates to all website content including projects, services, testimonials, and more.",
    adminPanelInfo:
      "Comprehensive admin dashboard where administrators can manage all website content. Features include project management (add, edit, remove, change status), content editing for all page sections, media library management, and SEO settings.",
    technicalDetails: {
      architecture: "Server-Side Rendering (SSR) with Next.js",
      database: "PostgreSQL with Prisma ORM",
      deployment: "Vercel with CI/CD Pipeline",
      api: "RESTful API with Next.js API Routes",
    },
  },
  {
    id: 2,
    title: "Arali Group CRM",
    subtitle: "Enterprise CRM System",
    description:
      "Operations-grade CRM with pipeline tracking, analytics dashboards, and automated workflows.",
    status: "Completed",
    image: "/images/projects/crm.png",
    tags: [
      "Analytics Dashboard",
      "Automation",
      "Role-Based Access",
      "Audit Logs",
    ],
    stack: ["Figma", "Next.js", "React"],
    link: "#",
    detailedDescription:
      "A comprehensive enterprise CRM system designed for operations management. The platform includes advanced features like audit logging, user management, task tracking, fuel management, and comprehensive analytics dashboards. The system provides granular role-based access control and real-time tracking capabilities.",
    features: [
      "Comprehensive Audit Logging System",
      "User Management with Role-Based Access Control (RBAC)",
      "Task Management & Tracking",
      "Fuel Management (Pouring, Consumption, Records)",
      "Truck & Material Management",
      "Project & Location Tracking",
      "Real-time Analytics Dashboard",
      "Permission Management System",
      "Login Activity Tracking",
      "Data Filtering & Search Capabilities",
    ],
    backendInfo:
      "Full-stack application with robust backend APIs for all CRM operations. Includes database management, authentication, authorization, and data processing services.",
    adminPanelInfo:
      "Advanced admin panel with comprehensive management features including user roles, permissions, audit logs viewing, system configuration, and data management across all modules.",
    screenshots: ["/images/projects/crm.png"],
    technicalDetails: {
      architecture: "Full-Stack Next.js Application",
      database: "PostgreSQL with Prisma ORM",
      deployment: "Cloud-hosted with Docker",
      api: "RESTful API with Next.js API Routes",
    },
  },
  {
    id: 3,
    title: "N‑Movers CRM",
    subtitle: "Load & User Management",
    description:
      "Operations CRM tailored for N‑Movers: load management, dispatch workflows, user/role management, and granular permissions.",
    status: "In Progress",
    image: "/images/projects/n-movers.jpg",
    tags: [
      "Loads",
      "Dispatch",
      "RBAC",
      "Workflows",
      "Real-time Tracking",
      "User Management",
    ],
    stack: ["Figma", "Next.js", "React"],
    link: "#",
    detailedDescription:
      "A specialized operations CRM system designed specifically for N-Movers logistics company. The platform provides comprehensive load management, dispatch workflows, and advanced user/role management with granular permissions. The system enables real-time tracking of loads, efficient dispatch operations, and complete control over user access and workflows.",
    features: [
      "Load Management System (Create, Track, Update Loads)",
      "Dispatch Workflow Management",
      "User & Role Management with Granular Permissions",
      "Real-time Load Status Tracking",
      "Driver Assignment & Management",
      "Route Planning & Optimization",
      "Document Management (Bills of Lading, Invoices)",
      "Notification System for Load Updates",
      "Analytics Dashboard for Operations",
      "Audit Trail for All Operations",
      "Mobile-Responsive Interface",
      "Integration with Mobile App",
    ],
    backendInfo:
      "Full-stack application with robust backend APIs for load management, dispatch operations, and user management. Includes real-time data synchronization, workflow engine, and comprehensive permission system. The backend handles complex business logic for logistics operations including route optimization and status tracking.",
    adminPanelInfo:
      "Comprehensive admin dashboard for managing all aspects of the logistics operations. Features include load management (add, edit, assign, track), dispatch workflow configuration, user role and permission management, driver assignment, route management, and real-time monitoring of all operations. Administrators can configure workflows, set permissions, and monitor system activity.",
    screenshots: ["/images/projects/n-movers.jpg"],
    technicalDetails: {
      architecture: "Full-Stack Next.js Application with Real-time Updates",
      database: "PostgreSQL with Prisma ORM",
      deployment: "Cloud-hosted with Docker & CI/CD",
      api: "RESTful API with Next.js API Routes & WebSocket for Real-time",
    },
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
      "Landing page for a home rehabilitation and physiotherapy service.",
    status: "Completed",
    image: "/images/projects/home-rehab.jpg",
    tags: [
      "Healthcare",
      "Landing Page",
      "Responsive",
      "Accessibility",
      "Multi-language",
      "SEO Optimized",
    ],
    stack: ["Figma", "React", "Next.js"],
    link: "#",
    detailedDescription:
      "A comprehensive healthcare landing page designed for a home rehabilitation and physiotherapy service. The platform features specialist profiles showcasing the team's expertise, full SEO optimization for better search visibility, bilingual support (2 languages) for broader accessibility, and integrated call functionality throughout the site for easy patient contact.",
    features: [
      "Specialist Profiles Section (Showcase Team Expertise)",
      "Full SEO Optimization (Meta Tags, Structured Data, Sitemap)",
      "Dual Language Support (2 Languages with Language Switcher)",
      "Integrated Call-to-Action Throughout Site",
      "Click-to-Call Functionality on Mobile Devices",
      "Service Information & Booking Sections",
      "Responsive Design for All Devices",
      "Accessibility Compliance (WCAG 2.1)",
      "Fast Loading with Image Optimization",
      "Contact Forms with Validation",
    ],
    backendInfo:
      "Built with modern web technologies including Next.js for optimal performance. The site includes language switching functionality, SEO optimization features, and integrated contact systems.",
    adminPanelInfo:
      "Content management system allows administrators to update specialist profiles, manage service information, update content in both languages, and manage SEO settings.",
    technicalDetails: {
      architecture: "Server-Side Rendering (SSR) with Next.js",
      database: "Content Management via CMS",
      deployment: "Vercel with CI/CD Pipeline",
      api: "Static Site Generation with API Routes",
    },
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
