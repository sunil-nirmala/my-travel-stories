import { about } from "../data/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative bg-earth py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative aspect-[4/5] max-w-sm rounded-sm overflow-hidden">
            <img src={about.photo} alt={about.name} className="w-full h-full object-cover" />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-xs tracking-widest2 uppercase text-amber mb-4">About Me</p>
          <h2 className="font-display text-4xl md:text-5xl mb-2">{about.name}</h2>
          <p className="text-clay text-sm mb-6">{about.intro}</p>
          <p className="font-display italic text-xl md:text-2xl text-sand/85 leading-snug mb-6">
            &ldquo;{about.quote}&rdquo;
          </p>
          <p className="text-sand/70 leading-relaxed mb-4">{about.whyITravel}</p>
          <p className="text-sand/70 leading-relaxed">{about.whatItMeans}</p>
        </Reveal>
      </div>
    </section>
  );
}
