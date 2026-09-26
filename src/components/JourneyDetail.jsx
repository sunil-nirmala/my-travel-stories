/*import { useState } from "react";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import VideoCard from "./VideoCard";


export default function JourneyDetail({ j }) {
  const [lbIndex, setLbIndex] = useState(null);
  const nav = (dir) => setLbIndex((i) => (i + dir + j.gallery.length) % j.gallery.length);

  return (
    <section id={j.id} className="relative bg-earth">
      <div className="relative h-[70vh] min-h-[420px] overflow-hidden">
        <img src={j.cover} alt={j.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/25 to-earth/10" />
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-12 max-w-4xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-widest2 uppercase text-amber mb-3">My Experience</p>
            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl">{j.name}</h2>
          </Reveal>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <Reveal>
          <p className="text-xs tracking-widest2 uppercase text-amber mb-4">My Story</p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-clay mb-6">
            <span>{j.location}</span>
            <span>{j.date}</span>
          </div>
          <p className="text-sand/80 leading-relaxed text-base md:text-lg">{j.story}</p>
        </Reveal>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <Reveal>
          <p className="text-xs tracking-widest2 uppercase text-amber mb-6">Moments</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {j.gallery.map((src, i) => (
              <button
                key={src}
                onClick={() => setLbIndex(i)}
                className={`group relative overflow-hidden rounded-sm ${i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-[4/3]" : "aspect-square"}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {j.videos?.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 md:px-10 pb-16 md:pb-20">
          <Reveal>
            <p className="text-xs tracking-widest2 uppercase text-amber mb-6">Videos</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {j.videos.map((v) => (
                <VideoCard key={v.src} video={v} />
              ))}
            </div>
          </Reveal>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 md:px-10 pb-24 md:pb-32">
        <Reveal>
          <p className="text-xs tracking-widest2 uppercase text-amber mb-8">Journey</p>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {j.timeline.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="text-sm text-sand/80 px-3 py-1.5 rounded-full border border-sand/15">{step}</span>
                {i < j.timeline.length - 1 && <span className="text-amber">→</span>}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {lbIndex !== null && (
        <Lightbox images={j.gallery} index={lbIndex} onClose={() => setLbIndex(null)} onNav={nav} />
      )}
    </section>
  );
}*/

import { useState } from "react";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";
import VideoCard from "./VideoCard";

export default function JourneyDetail({ j }) {
  const [lbIndex, setLbIndex] = useState(null);

  const nav = (dir) =>
    setLbIndex(
      (i) => (i + dir + j.gallery.length) % j.gallery.length
    );

  return (
    <section id={j.id} className="relative bg-earth">

      {/* HERO / COVER IMAGE */}
      <div className="relative h-[60vh] min-h-[420px] overflow-hidden bg-black">

        <img
          src={j.cover}
          alt={j.name}
          className="absolute inset-0 w-full h-full object-contain object-center"
        />

        {/* Dark cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/20 to-transparent" />

        {/* Journey title */}
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-10 pb-12 max-w-4xl mx-auto">
          <Reveal>
            <p className="text-xs tracking-widest2 uppercase text-amber mb-3">
              My Experience
            </p>

            <h2 className="font-display text-5xl sm:text-6xl md:text-7xl">
              {j.name}
            </h2>
          </Reveal>
        </div>
      </div>

      {/* MY STORY */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 py-16 md:py-20">
        <Reveal>
          <p className="text-xs tracking-widest2 uppercase text-amber mb-4">
            My Story
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-clay mb-6">
            <span>{j.location}</span>
            <span>{j.date}</span>
          </div>

          <p className="text-sand/80 leading-relaxed text-base md:text-lg">
            {j.story}
          </p>
        </Reveal>
      </div>

      {/* PHOTO GALLERY */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 pb-16 md:pb-20">
        <Reveal>
          <p className="text-xs tracking-widest2 uppercase text-amber mb-6">
            Moments
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {j.gallery.map((src, i) => (
              <button
                key={src}
                onClick={() => setLbIndex(i)}
                className={`group relative overflow-hidden rounded-sm ${
                  i === 0
                    ? "col-span-2 row-span-2 aspect-square md:aspect-[4/3]"
                    : "aspect-square"
                }`}
              >
                <img
                  src={src}
                  alt={`${j.name} memory ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      {/* VIDEOS */}
      {j.videos?.length > 0 && (
        <div className="max-w-5xl mx-auto px-6 md:px-10 pb-16 md:pb-20">
          <Reveal>
            <p className="text-xs tracking-widest2 uppercase text-amber mb-6">
              Videos
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {j.videos.map((v) => (
                <VideoCard key={v.src} video={v} />
              ))}
            </div>
          </Reveal>
        </div>
      )}

      {/* JOURNEY TIMELINE */}
      <div className="max-w-3xl mx-auto px-6 md:px-10 pb-24 md:pb-32">
        <Reveal>
          <p className="text-xs tracking-widest2 uppercase text-amber mb-8">
            Journey
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {j.timeline.map((step, i) => (
              <div key={step} className="flex items-center gap-3">
                <span className="text-sm text-sand/80 px-3 py-1.5 rounded-full border border-sand/15">
                  {step}
                </span>

                {i < j.timeline.length - 1 && (
                  <span className="text-amber">→</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* FULLSCREEN IMAGE VIEWER */}
      {lbIndex !== null && (
        <Lightbox
          images={j.gallery}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onNav={nav}
        />
      )}
    </section>
  );
}
