import { social } from "../data/site";
import Reveal from "./Reveal";

export default function Instagram() {
  return (
    <section className="relative bg-earth py-28 md:py-32 px-6 md:px-10 border-t border-sand/10">
      <div className="max-w-xl mx-auto text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl mb-4">Follow My Journey</h2>
          <p className="text-clay mb-8">More moments, photos and journeys on Instagram.</p>
          <a
            href={social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-amber text-earth text-sm tracking-wide rounded-full hover:bg-amber-soft transition-colors"
          >
            Follow Me on Instagram →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
