import { useState } from "react";

export default function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video rounded-sm overflow-hidden bg-earth-raised">
      {playing ? (
        <video src={video.src} controls autoPlay className="w-full h-full object-cover" />
      ) : (
        <button onClick={() => setPlaying(true)} className="group relative w-full h-full block">
          <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-earth/40 group-hover:bg-earth/55 transition-colors flex items-center justify-center">
            <span className="w-16 h-16 rounded-full border border-sand/70 flex items-center justify-center text-2xl group-hover:border-amber group-hover:text-amber transition-colors">
              ▶
            </span>
          </div>
        </button>
      )}
      <div className="p-4">
        <h4 className="font-display text-lg">{video.title}</h4>
        <p className="text-sm text-clay mt-1">{video.description}</p>
      </div>
    </div>
  );
}
