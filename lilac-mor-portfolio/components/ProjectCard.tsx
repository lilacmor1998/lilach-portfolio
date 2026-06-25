import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { ArrowIcon } from "./ArrowIcon";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  priority?: boolean;
}) {
  const isLight = project.textColor === "light";

  return (
    <Link
      className={`project-card group relative flex min-h-[620px] overflow-hidden rounded-[2rem] p-5 md:min-h-[760px] md:p-8 ${
        isLight ? "text-white" : "text-ink"
      }`}
      href={`/projects/${project.slug}`}
      style={{ backgroundColor: project.color }}
    >
      <div className="relative z-10 flex w-full flex-col">
        <div className="flex items-start justify-between gap-6">
          <div>
            <p className={`mb-2 text-xs font-bold uppercase tracking-[.18em] ${isLight ? "text-white/60" : "text-ink/55"}`}>
              {project.category}
            </p>
            <h2 className="text-4xl font-black tracking-[-.06em] md:text-6xl">
              {project.title}
            </h2>
          </div>
          <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border transition-transform group-hover:rotate-[-12deg] group-hover:scale-110 ${
            isLight ? "border-white/30" : "border-ink/20"
          }`}>
            <ArrowIcon className="h-5 w-5 -rotate-45" />
          </span>
        </div>

        <div className="relative mt-10 flex flex-1 items-center justify-center">
          <div className="absolute inset-x-[6%] top-[8%] bottom-[4%] rounded-[40%] bg-white/18 blur-3xl" />
          <Image
            alt={`${project.title} project preview`}
            className="relative max-h-[520px] w-auto max-w-[92%] object-contain drop-shadow-2xl transition duration-700 ease-out group-hover:scale-[1.035] group-hover:rotate-[1deg]"
            height={1000}
            priority={priority}
            src={project.image}
            width={1000}
          />
        </div>

        <div className="mt-5 flex items-end justify-between gap-8">
          <p className={`max-w-md text-sm leading-relaxed md:text-base ${isLight ? "text-white/75" : "text-ink/65"}`}>
            {project.kicker}
          </p>
          <span className="text-xs font-bold uppercase tracking-[.18em]">View case</span>
        </div>
      </div>
    </Link>
  );
}
