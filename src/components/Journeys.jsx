// import journeys from "../data/journeys";
import journeys from "../data/journeys";
import Reveal from "./Reveal";

export default function Journeys() {
  return (
    <section id="journeys" className="relative bg-earth">
      <div className="max-w-5xl mx-auto px-6 pt-28 md:pt-36 pb-14">
        <Reveal>
          <p className="text-xs tracking-widest2 uppercase text-amber mb-4">
            My Journeys
          </p>

          <h2 className="font-display text-4xl md:text-6xl">
            Places I've Experienced
          </h2>
        </Reveal>
      </div>

      {journeys.map((j, i) => (
        <div
          key={j.id}
          className="relative h-[80vh] min-h-[460px] w-full overflow-hidden border-t border-sand/10 group"
        >
          <img
            src={j.cover}
            alt={j.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/25 to-earth/10" />

          <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-12 max-w-5xl mx-auto">
            <Reveal>

              {/* Journey name */}
              <h3 className="font-display text-5xl sm:text-6xl md:text-7xl mt-2">
                {j.name}
              </h3>

              {/* Tagline */}
              <p className="mt-3 font-display italic text-lg md:text-xl text-sand/85">
                {j.tagline}
              </p>

              {/* Location and date */}
              <p className="mt-3 text-sm text-clay">
                {j.location} · {j.date}
              </p>

              {/* Experience button */}
              <a
                href={`#${j.id}`}
                className="mt-6 inline-flex items-center gap-2 text-xs tracking-widest2 uppercase text-amber hover:gap-3 transition-all"
              >
                View My Experience →
              </a>

            </Reveal>
          </div>
        </div>
      ))}
    </section>
  );
}