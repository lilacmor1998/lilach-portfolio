import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "About",
  description: "About Lilac Mor, a multidisciplinary designer based in Seoul.",
};

export default function AboutPage() {
  return (
    <>
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <div className="relative mx-auto max-w-xl lg:mx-0">
              <div className="absolute -left-5 -top-5 h-28 w-28 rounded-full bg-lilac" />
              <Image
                alt="Lilac Mor"
                className="relative w-full rounded-[2.2rem] shadow-card"
                height={1063}
                priority
                src="/images/portrait.webp"
                width={900}
              />
            </div>
            <div>
              <p className="mb-6 text-xs font-bold uppercase tracking-[.2em] text-ink/45">Hey, I&apos;m Lilac</p>
              <h1 className="section-title mb-10">
                I make ideas feel <span className="text-lilac">tangible.</span>
              </h1>
              <div className="grid gap-8 text-base leading-relaxed text-ink/65 md:grid-cols-2 md:text-lg">
                <p>
                  I&apos;m a graphic designer with more than four years of experience across branding, packaging, illustration, and visual storytelling.
                </p>
                <p>
                  Originally from Israel and now living in Korea, I bring a cross-cultural point of view to every brief — especially when a brand needs to travel between markets without losing its personality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink px-5 py-24 text-white md:px-8 md:py-36">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-16 grid gap-5 md:grid-cols-2 md:items-end">
            <h2 className="section-title">Experience<br />& education.</h2>
            <p className="max-w-sm text-sm leading-relaxed text-white/55 md:justify-self-end">
              A practice shaped by design school, in-house public communication, independent client work, and language study.
            </p>
          </div>

          <div className="border-t border-white/20">
            {[
              ["2025", "Sogang University", "Korean Studies"],
              ["2022—Now", "Independent Designer", "Branding, packaging, print, and illustration"],
              ["2020—2022", "IDF Graphic Designer", "Campaigns, event identities, and digital communication"],
              ["2018", "Galili High School of Arts", "Visual arts and design"],
            ].map(([date, title, detail]) => (
              <div className="grid gap-3 border-b border-white/20 py-7 md:grid-cols-[.3fr_.7fr_1fr] md:items-center" key={`${date}-${title}`}>
                <p className="text-xs font-bold uppercase tracking-[.16em] text-lilac">{date}</p>
                <p className="text-xl font-bold tracking-[-.03em]">{title}</p>
                <p className="text-sm text-white/55 md:text-right">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-8 md:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[.2em] text-ink/45">Tools & strengths</p>
            <h2 className="mb-10 text-5xl font-black tracking-[-.06em] md:text-7xl">Craft meets curiosity.</h2>
            <div className="flex flex-wrap gap-2">
              {["Illustrator", "Photoshop", "InDesign", "Blender", "Packaging", "Print production", "Illustration", "Art direction"].map((skill) => (
                <span className="rounded-full border border-ink/25 px-4 py-3 text-sm font-semibold" key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] bg-lilac p-8 md:p-12">
            <p className="mb-16 text-xs font-bold uppercase tracking-[.2em]">Languages & life</p>
            <div className="space-y-5 text-3xl font-black tracking-[-.04em] md:text-5xl">
              <p>Hebrew — native</p>
              <p>English — fluent</p>
              <p>Korean — TOPIK 3</p>
            </div>
            <p className="mt-16 max-w-lg leading-relaxed">
              Usually found collecting packaging, watching films, learning languages, traveling, drinking coffee, or making friends with someone&apos;s pet.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-24 md:px-8 md:pb-36">
        <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-8 border-t border-ink/20 pt-12 md:flex-row md:items-center">
          <p className="max-w-3xl text-3xl font-black leading-tight tracking-[-.045em] md:text-5xl">
            Have something that needs a sharper visual point of view?
          </p>
          <Link className="group inline-flex shrink-0 items-center gap-3 rounded-full bg-ink px-6 py-4 text-sm font-bold text-white" href="/contact">
            Start a conversation
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
