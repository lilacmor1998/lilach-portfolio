import Link from "next/link";
import { ArrowIcon } from "./ArrowIcon";

export function SiteFooter() {
  return (
    <footer className="bg-ink px-5 pb-8 pt-20 text-white md:px-8 md:pt-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-12 border-b border-white/20 pb-16 md:grid-cols-[1.5fr_.5fr] md:items-end">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[.22em] text-lilac">
              Have a project in mind?
            </p>
            <Link
              className="group inline-flex items-center gap-4 text-[clamp(3rem,8vw,8rem)] font-black leading-[.82] tracking-[-.075em]"
              href="mailto:lilachmor1998@gmail.com"
            >
              Let&apos;s talk
              <ArrowIcon className="h-[.7em] w-[.7em] transition-transform group-hover:translate-x-3" />
            </Link>
          </div>
          <div className="space-y-3 text-sm text-white/70 md:text-right">
            <p>Packaging · Print · Brand worlds</p>
            <p>Based in Seoul, working globally</p>
            <a className="text-white underline decoration-lilac decoration-2 underline-offset-4" href="mailto:lilachmor1998@gmail.com">
              lilachmor1998@gmail.com
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-xs uppercase tracking-[.16em] text-white/45 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Lilac Mor</p>
          <p>Designed to make the shelf less boring.</p>
        </div>
      </div>
    </footer>
  );
}
