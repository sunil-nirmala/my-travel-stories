import journeys from "../data/journeys";
import Reveal from "./Reveal";
import VideoCard from "./VideoCard";

const allVideos = journeys.flatMap((j) => j.videos.map((v) => ({ ...v, place: j.name })));

export default function Videos() {
  if (allVideos.length === 0) return null;
  return (
    <section className="relative bg-earth py-28 md:py-36 px-6 md:px-10">
      <div className="max-w-5xl mx-auto">
        <Reveal className="mb-12">
          <p className="text-xs tracking-widest2 uppercase text-amber mb-4">My Videos</p>
          <h2 className="font-display text-4xl md:text-6xl">Moments in Motion</h2>
        </Reveal>

        <Reveal delay={0.1} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {allVideos.map((v) => (
            <VideoCard key={v.src} video={v} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
