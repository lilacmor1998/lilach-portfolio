import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon } from "@/components/ArrowIcon";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Lilac Mor for packaging, print, branding, and illustration projects.",
};

export default function ContactPage() {
  return (
    <section className="px-3 pb-3 pt-3 md:px-5">
      <div className="grain mx-auto min-h-[calc(100svh-88px)] max-w-[1760px] overflow-hidden rounded-[2rem] bg-lilac px-6 py-10 md:px-12 md:py-14 lg:px-16">
        <div className="grid min-h-[calc(100svh-190px)] gap-16 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div className="flex h-full flex-col justify-between">
            <p className="text-xs font-bold uppercase tracking-[.2em]">Available for selected projects</p>
            <div className="py-16">
              <h1 className="display">
                LET&apos;S MAKE
                <br />
                IT <span className="italic">REAL.</span>
              </h1>
              <p className="mt-8 max-w-xl text-lg leading-relaxed">
                Tell me what you&apos;re building, where it needs to live, and what you want people to feel when they see it.
              </p>
            </div>
            <div className="border-t border-ink/25 pt-5 text-sm">
              <p>Seoul, South Korea · Working globally</p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-ink p-7 text-white shadow-card md:p-10">
            <p className="mb-12 text-xs font-bold uppercase tracking-[.2em] text-white/45">Direct line</p>
            <a className="group flex items-start justify-between gap-5 border-b border-white/20 pb-8" href="mailto:lilachmor1998@gmail.com">
              <span>
                <span className="mb-3 block text-xs uppercase tracking-[.16em] text-lilac">Email</span>
                <span className="break-all text-2xl font-black tracking-[-.04em] md:text-4xl">lilachmor1998@gmail.com</span>
              </span>
              <ArrowIcon className="mt-8 h-7 w-7 shrink-0 -rotate-45 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <div className="grid gap-8 py-10 sm:grid-cols-2">
              <div>
                <p className="mb-2 text-xs uppercase tracking-[.16em] text-white/40">Best for</p>
                <p className="text-sm leading-relaxed text-white/70">Packaging, print, identity, illustration, and localized campaigns.</p>
              </div>
              <div>
                <p className="mb-2 text-xs uppercase tracking-[.16em] text-white/40">Languages</p>
                <p className="text-sm leading-relaxed text-white/70">English · Hebrew · Korean</p>
              </div>
            </div>

            <Link className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-acid" href="/projects">
              Browse work first
              <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
