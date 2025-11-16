import { ProjectCard } from "./ProjectCard";
import { projectsData } from "./projectsData";

export default function RecentProjects() {
  return (
    <section className="bg-[#0b1220] py-16 text-white dark:bg-[#0b1220]">
      <div className="container px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-teal-400">Portfolio</p>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="text-gray-200">Featured </span>
            <span className="bg-gradient-to-r from-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-300">
            Delivering excellence across web, mobile, and enterprise solutions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projectsData.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}


