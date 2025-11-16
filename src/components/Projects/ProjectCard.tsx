import Image from "next/image";
import { ProjectItem } from "./projectsData";

interface Props {
  project: ProjectItem;
}

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
        <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/20" />
        <div className="absolute left-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white shadow">
          {project.status}
        </div>
      </div>
      <div className="p-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-400">{project.subtitle}</p>
        <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-slate-300">{project.description}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}


