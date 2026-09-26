import { nav, site, social } from "../data/site";

export default function Footer() {
  return (
    <footer className="relative bg-earth border-t border-sand/10 py-16 px-6 md:px-10">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="font-display text-2xl">{site.name}</h3>
        <p className="font-display italic text-sand/70 mt-2">{site.tagline}</p>

        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-8 text-sm text-sand/70">
          {nav.map((l, i) => (
            <span key={l.href} className="flex items-center gap-8">
              <a href={l.href} className="hover:text-amber transition-colors">
                {l.label}
              </a>
              {i < nav.length - 1 && <span className="text-sand/20">·</span>}
            </span>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6 text-sm text-clay">
          <a href={social.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-amber transition-colors">
            Instagram
          </a>
          <a href={social.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-amber transition-colors">
            YouTube
          </a>
          <a href={`mailto:${social.email}`} className="hover:text-amber transition-colors">
            Email
          </a>
        </div>

        <a href="#top" className="inline-block mt-10 text-xs tracking-widest2 uppercase text-sand/50 hover:text-amber transition-colors">
          ↑ Back to Top
        </a>

        <p className="mt-10 text-xs text-sand/30">© 2026 {site.name} · Made with ❤️</p>
      </div>
    </footer>
  );
}
