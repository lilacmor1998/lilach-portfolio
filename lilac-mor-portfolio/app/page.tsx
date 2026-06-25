import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <section className="px-3 pb-3 pt-3 md:px-5">
        <div className="grain relative mx-auto min-h-[calc(100svh-88px)] max-w-[1760px] overflow-hidden rounded-[2rem] bg-ink text-white">
          <div className="relative z-10 grid min-h-[calc(100svh-88px)] grid-cols-1 px-6 pb-8 pt-10 md:px-10 lg:grid-cols-[1.08fr_.92fr] lg:px-16 lg:py-14">
            <div className="flex flex-col justify-between">
              <div className="flex flex-wrap gap-2">
                {["Packaging", "Print", "Branding", "Seoul → Global"].map((item) => (
                  <span className="rounded-full border border-white/30 px-4 py-2 text-[11px] font-bold uppercase tracking-[.16em]" key={item}>
                    {item}
                  </span>
                ))}
              </div>

              <div className="py-14 lg:py-8">
                <p className="mb-6 max-w-md text-sm leading-relaxed text-white/55 md:text-base">
                  Independent designer turning products, print, and ideas into visual worlds people want to pick up.
                </p>
                <h1 className="display">
                  MADE TO
                  <br />
                  <span className="text-lilac">BE HELD.</span>
                </h1>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-white/20 pt-5 text-xs font-bold uppercase tracking-[.16em]">
                <p>Selected work · 2020—Now</p>
                <Link className="group flex items-center gap-2" href="/projects">
                  Explore projects
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative hidden min-h-[680px] lg:block">
              <div className="hero-orb absolute right-[8%] top-[4%] h-[clamp(300px,31vw,520px)] w-[clamp(300px,31vw,520px)] rounded-full" />
              <div className="absolute right-[1%] top-[7%] z-10 w-[52%] rotate-[6deg] overflow-hidden rounded-[1.7rem] border-[7px] border-white shadow-card transition hover:rotate-[2deg]">
                <Image alt="Melona packaging campaign" className="h-auto w-full" height={1172} priority src="/images/melona-campaign.webp" width={1200} />
              </div>
              <div className="absolute bottom-[6%] left-[5%] z-20 w-[48%] rotate-[-7deg] overflow-hidden rounded-[1.7rem] border-[7px] border-white bg-white shadow-card transition hover:rotate-[-2deg]">
                <Image alt="Yerim Works identity" className="h-auto w-full" height={587} priority src="/images/yerim-identity.webp" width={1300} />
              </div>
              <div className="absolute bottom-[12%] right-[4%] z-30 flex h-24 w-24 rotate-12 items-center justify-center rounded-full bg-acid text-center text-xs font-black uppercase leading-tight text-ink shadow-card">
                See it
                <br />
                on shelf
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-ink/15 py-4">
        <div className="marquee text-2xl font-black uppercase tracking-[-.04em] md:text-4xl">
          {[0, 1].map((group) => (
            <div className="flex shrink-0 items-center" key={group}>
              {["Packaging", "Print", "Identity", "Illustration", "Localization"].map((item) => (
                <span className="flex items-center" key={item}>
                  <span className="px-5">{item}</span>
                  <span className="text-lilac">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-14 flex flex-col gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.2em] text-ink/50">
                Selected projects
              </p>
              <h2 className="section-title max-w-4xl">Work with a pulse.</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink/60 md:text-base">
              Packaging-led worlds, cultural translation, and identities that stay memorable from first glance to final detail.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard key={project.slug} priority={index < 2} project={project} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link className="inline-flex items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white transition hover:bg-lilac hover:text-ink" href="/projects">
              All projects
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-lilac px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-5 rotate-[-4deg] rounded-[2rem] border-2 border-ink" />
            <Image
              alt="Portrait of Lilac Mor"
              className="relative w-full rounded-[2rem] shadow-card"
              height={1063}
              src="/images/portrait.webp"
              width={900}
            />
            <div className="absolute -bottom-6 -right-4 flex h-28 w-28 rotate-12 items-center justify-center rounded-full bg-ink text-center text-xs font-black uppercase tracking-[.08em] text-white">
              Israel
              <br />× Korea
            </div>
          </div>

          <div className="lg:pl-12">
            <p className="mb-5 text-xs font-bold uppercase tracking-[.2em]">A little about me</p>
            <h2 className="section-title mb-8">
              Sharp eye.
              <br />
              Soft spot for <span className="italic">details.</span>
            </h2>
            <p className="max-w-2xl text-lg leading-relaxed md:text-xl">
              I&apos;m Lilac, a graphic designer specializing in packaging, branding, illustration, and visual storytelling. Originally from Israel and now based in Korea, I design across languages and cultures with clarity, energy, and a little mischief.
            </p>
            <Link className="group mt-10 inline-flex items-center gap-3 border-b-2 border-ink pb-1 text-sm font-bold uppercase tracking-[.14em]" href="/about">
              More about me
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto max-w-[1600px]">
          <div className="mb-16 grid gap-6 md:grid-cols-2 md:items-end">
            <h2 className="section-title">From shelf<br />to screen.</h2>
            <p className="max-w-md text-base leading-relaxed text-ink/60 md:justify-self-end">
              A flexible practice built for brands that need a strong visual idea and the craft to carry it through every touchpoint.
            </p>
          </div>
          <div className="grid border-l border-t border-ink/20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Packaging", "Structures, labels, hierarchy, finishes, and shelf presence."],
              ["02", "Print", "Posters, editorial systems, campaign materials, and production-ready art."],
              ["03", "Branding", "Identity systems with a distinct voice, palette, and visual rhythm."],
              ["04", "Localization", "Culturally fluent design across English, Hebrew, and Korean contexts."],
            ].map(([number, title, copy]) => (
              <article className="min-h-72 border-b border-r border-ink/20 p-7" key={number}>
                <p className="mb-16 text-xs font-bold text-ink/40">{number}</p>
                <h3 className="mb-4 text-3xl font-black tracking-[-.05em]">{title}</h3>
                <p className="text-sm leading-relaxed text-ink/60">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
