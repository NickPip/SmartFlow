import Image from "next/image";
import { FaReact, FaFigma } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { ProjectItem } from "./projectsData";

interface Props {
  project: ProjectItem;
}

const getStackIcon = (stackName: string) => {
  switch (stackName.toLowerCase()) {
    case "react":
      return <FaReact className="h-4 w-4" />;
    case "figma":
      return <FaFigma className="h-4 w-4" />;
    case "next.js":
      return <SiNextdotjs className="h-4 w-4" />;
    case "react native":
      return <TbBrandReactNative className="h-4 w-4" />;
    default:
      return null;
  }
};

export function ProjectCard({ project }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-sm backdrop-blur-sm transition hover:shadow-lg">
      <div className="relative h-56 w-full overflow-hidden sm:h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          priority={false}
        />
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/20" /> */}
        <div className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
          {project.status}
        </div>
      </div>
      <div className="p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-400">{project.subtitle}</p>
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">{project.description}</p>
        {project.stack && project.stack.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <div
                key={tech}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex h-5 w-5 items-center justify-center text-white">
                  {getStackIcon(tech)}
                </div>
                <span className="text-xs font-medium text-white">{tech}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


