import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected packaging, print, branding, and illustration projects by Lilac Mor.",
};

export default function ProjectsPage() {
  return (
    <section className="px-5 pb-28 pt-16 md:px-8 md:pb-40 md:pt-24">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 grid gap-8 border-b border-ink/20 pb-14 md:mb-20 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-ink/50">
              Selected work
            </p>
            <h1 className="display">Projects<span className="text-lilac">.</span></h1>
          </div>
          <p className="max-w-lg text-base leading-relaxed text-ink/60 md:justify-self-end md:text-lg">
            Packaging, print, identities, and illustration systems shaped to be clear, tactile, and hard to forget.
          </p>
        </div>

        <div className="mb-10 flex flex-wrap gap-2">
          {["All work", "Packaging", "Print", "Branding", "Illustration"].map((item, index) => (
            <span className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[.12em] ${index === 0 ? "border-ink bg-ink text-white" : "border-ink/25"}`} key={item}>
              {item}
            </span>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} priority={index < 2} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
