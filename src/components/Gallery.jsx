import { useMemo, useState } from "react";
import journeys from "../data/journeys";
import Reveal from "./Reveal";
import Lightbox from "./Lightbox";

const validJourneys = journeys.filter(
  (j) => j && typeof j.name === "string" && Array.isArray(j.gallery)
);

const filters = [
  "ALL",
  ...validJourneys.map((j) =>
    j.name.split(" ")[0].toUpperCase()
  ),
];

const allPhotos = validJourneys.flatMap((j) =>
  j.gallery
    .filter((src) => typeof src === "string")
    .map((src) => ({
      src,
      tag: j.name.split(" ")[0].toUpperCase(),
    }))
);

const spans = [
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-2",
  "row-span-1",
];

export default function Gallery() {
  const [active, setActive] = useState("ALL");
  const [lbIndex, setLbIndex] = useState(null);

  const photos = useMemo(
    () =>
      active === "ALL"
        ? allPhotos
        : allPhotos.filter((p) => p.tag === active),
    [active]
  );

  const nav = (dir) => {
    if (photos.length === 0) return;

    setLbIndex(
      (i) => (i + dir + photos.length) % photos.length
    );
  };

  return (
    <section
      id="gallery"
      className="relative bg-earth py-28 md:py-36 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <Reveal className="px-2 mb-10">
          <p className="text-xs tracking-widest2 uppercase text-amber mb-4">
            My Gallery
          </p>

          <h2 className="font-display text-4xl md:text-6xl">
            My Photography
          </h2>
        </Reveal>

        {/* FILTERS */}
        <div className="flex flex-wrap gap-3 px-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => {
                setActive(f);
                setLbIndex(null);
              }}
              className={`px-4 py-2 rounded-full text-xs tracking-widest2 uppercase border transition-colors ${
                active === f
                  ? "bg-amber text-earth border-amber"
                  : "border-sand/20 text-sand/70 hover:border-amber/50"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* GALLERY */}
        {photos.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[150px] md:auto-rows-[190px] gap-2 md:gap-3">

            {photos.map((p, i) => (
              <button
                key={p.src + i}
                onClick={() => setLbIndex(i)}
                className={`group relative overflow-hidden rounded-sm ${
                  spans[i % spans.length]
                }`}
              >
                <img
                  src={p.src}
                  alt={`Travel memory ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-earth/0 group-hover:bg-earth/20 transition-colors" />
              </button>
            ))}

          </div>
        ) : (
          <div className="text-center py-20 text-sand/60">
            No photos available yet.
          </div>
        )}
      </div>

      {/* LIGHTBOX */}
      {lbIndex !== null && photos.length > 0 && (
        <Lightbox
          images={photos.map((p) => p.src)}
          index={lbIndex}
          onClose={() => setLbIndex(null)}
          onNav={nav}
        />
      )}
    </section>
  );
}