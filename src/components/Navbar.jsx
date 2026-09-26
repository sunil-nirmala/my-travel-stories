import { useEffect, useState } from "react";
import { nav, site } from "../data/site";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-wide text-sand">
          {site.name}
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-sand/75 hover:text-amber transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
        >
          <span className={`block h-px w-6 bg-sand transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`block h-px w-6 bg-sand transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-6 bg-sand transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden glass px-6 pb-6 pt-2 flex flex-col gap-4">
          {nav.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sand/85 text-base">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
