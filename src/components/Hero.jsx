import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { hero, site } from "../data/site";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative h-[100svh] min-h-[560px] overflow-hidden">
      <motion.img
        style={{ scale }}
        src={hero.image}
        alt="A Himalayan mountain view"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-earth via-earth/50 to-earth/30" />

      <motion.div style={{ opacity }} className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="font-display text-5xl sm:text-6xl md:text-8xl tracking-wide">{site.name}</h1>
        <p className="mt-5 font-display italic text-lg md:text-2xl text-sand/85">{site.tagline}</p>
        <p className="mt-6 max-w-md text-sm md:text-base text-clay leading-relaxed">{hero.intro}</p>

        <a
          href="#journeys"
          className="mt-9 px-8 py-3.5 border border-amber/60 text-amber text-sm tracking-wide rounded-full hover:bg-amber hover:text-earth transition-colors"
        >
          {hero.cta}
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest2 uppercase text-sand/60">Scroll to explore ↓</span>
      </motion.div>
    </section>
  );
}
