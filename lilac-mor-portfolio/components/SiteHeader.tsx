import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-8">
        <Link className="group flex items-center gap-2" href="/">
          <span className="text-[1.05rem] font-black uppercase tracking-[-0.05em]">
            Lilac Mor
          </span>
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-lilac text-[10px] font-black transition-transform group-hover:rotate-12">
            L
          </span>
        </Link>

        <nav aria-label="Main navigation" className="flex items-center gap-1">
          {links.map((link) => (
            <Link
              className="rounded-full px-3 py-2 text-sm font-semibold transition hover:bg-ink hover:text-white md:px-5"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
