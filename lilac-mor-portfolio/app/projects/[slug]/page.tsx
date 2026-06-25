import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/ArrowIcon";
import { getProject, projects } from "@/data/projects";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const isLight = project.textColor === "light";
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <section className="px-3 pt-3 md:px-5">
        <div
          className={`grain mx-auto min-h-[780px] max-w-[1760px] overflow-hidden rounded-[2rem] p-6 md:p-10 lg:p-14 ${
            isLight ? "text-white" : "text-ink"
          }`}
          style={{ backgroundColor: project.color }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] ${isLight ? "text-white/70" : "text-ink/60"}`} href="/projects">
              <ArrowIcon className="h-4 w-4 rotate-180" />
              All projects
            </Link>
            <p className="text-xs font-bold uppercase tracking-[.16em]">{project.category}</p>
          </div>

          <div className="grid min-h-[650px] gap-10 pt-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div className="relative z-10">
              <p className={`mb-5 text-sm font-bold uppercase tracking-[.16em] ${isLight ? "text-white/60" : "text-ink/50"}`}>
                {project.kicker}
              </p>
              <h1 className="display">{project.title}</h1>
              <p className={`mt-8 max-w-xl text-base leading-relaxed md:text-lg ${isLight ? "text-white/70" : "text-ink/65"}`}>
                {project.description}
              </p>
            </div>

            <div className="relative flex min-h-[460px] items-center justify-center">
              <div className="absolute h-[70%] w-[70%] rounded-full bg-white/15 blur-3xl" />
              <Image
                alt={`${project.title} hero artwork`}
                className="relative max-h-[610px] w-auto max-w-full object-contain drop-shadow-2xl"
                height={1200}
                priority
                src={project.image}
                width={1200}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[.18em] text-ink/45">Scope</p>
            <ul className="space-y-3">
              {project.scope.map((item) => (
                <li className="border-b border-ink/15 pb-3 text-sm font-semibold" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-6 text-xs font-bold uppercase tracking-[.18em] text-ink/45">Overview</p>
            <p className="max-w-4xl text-3xl font-bold leading-[1.13] tracking-[-.04em] md:text-5xl">
              {project.longDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="px-3 md:px-5">
        <div className="mx-auto max-w-[1760px] overflow-hidden rounded-[2rem] bg-white">
          <Image
            alt={`${project.title} complete presentation board`}
            className="h-auto w-full"
            height={1080}
            src={project.boardImage}
            width={1920}
          />
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[1400px] gap-5 md:grid-cols-2">
          <article className="rounded-[2rem] border border-ink/15 p-8 md:p-12">
            <p className="mb-12 text-xs font-bold uppercase tracking-[.18em] text-ink/45">The thought</p>
            <p className="text-2xl font-bold leading-tight tracking-[-.035em] md:text-4xl">{project.insight}</p>
          </article>
          <article className="rounded-[2rem] bg-ink p-8 text-white md:p-12">
            <p className="mb-12 text-xs font-bold uppercase tracking-[.18em] text-white/45">The result</p>
            <p className="text-2xl font-bold leading-tight tracking-[-.035em] md:text-4xl">{project.outcome}</p>
          </article>
        </div>
      </section>

      <section className="px-3 pb-3 md:px-5">
        <Link
          className={`group mx-auto flex min-h-[520px] max-w-[1760px] flex-col justify-between overflow-hidden rounded-[2rem] p-7 md:p-12 ${
            nextProject.textColor === "light" ? "text-white" : "text-ink"
          }`}
          href={`/projects/${nextProject.slug}`}
          style={{ backgroundColor: nextProject.color }}
        >
          <div className="flex items-center justify-between">
            <p className="text-xs font-bold uppercase tracking-[.18em]">Next project</p>
            <ArrowIcon className="h-7 w-7 transition-transform group-hover:translate-x-2" />
          </div>
          <div className="grid items-end gap-8 md:grid-cols-2">
            <h2 className="section-title">{nextProject.title}</h2>
            <Image
              alt=""
              className="max-h-72 w-auto max-w-full justify-self-end object-contain transition-transform duration-700 group-hover:scale-105"
              height={700}
              src={nextProject.image}
              width={800}
            />
          </div>
        </Link>
      </section>
    </>
  );
}
