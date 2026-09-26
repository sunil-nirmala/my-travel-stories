import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Lightbox({ images, index, onClose, onNav }) {
  const touchX = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  if (index == null) return null;
  const src = images[index];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-earth/97 flex items-center justify-center px-4"
        onClick={onClose}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current == null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (dx > 50) onNav(-1);
          if (dx < -50) onNav(1);
          touchX.current = null;
        }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-6 right-6 text-sand/70 hover:text-amber text-3xl leading-none w-10 h-10 flex items-center justify-center z-10"
        >
          &times;
        </button>

        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNav(-1);
            }}
            aria-label="Previous"
            className="absolute left-2 md:left-8 text-sand/60 hover:text-amber text-4xl w-12 h-12 flex items-center justify-center z-10"
          >
            &#8249;
          </button>
        )}

        <motion.img
          key={src}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          src={src}
          alt=""
          className="max-h-[85vh] w-auto max-w-full object-contain rounded-sm"
        />

        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNav(1);
            }}
            aria-label="Next"
            className="absolute right-2 md:right-8 text-sand/60 hover:text-amber text-4xl w-12 h-12 flex items-center justify-center z-10"
          >
            &#8250;
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
