import { useState } from "react";
import { motion } from "framer-motion";

const VIDEO_ID = "qsigoOSNGwc";

export function Trailer({ compact = false }: { compact?: boolean }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div
      className={
        compact
          ? "group relative w-full overflow-hidden rounded-sm border border-border/60 bg-card shadow-deep aspect-video"
          : "group relative w-full overflow-hidden rounded-sm border border-border/60 bg-card shadow-deep aspect-video max-w-4xl mx-auto"
      }
    >
      {playing ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title="La Muerte del Ángel — Official Trailer"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          aria-label="Play the official trailer"
          className="absolute inset-0 h-full w-full cursor-pointer"
        >
          <img
            src={`https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
            alt="La Muerte del Ángel — Official Trailer"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* theatrical scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-background/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,oklch(0.11_0.008_20/0.6)_100%)]" />

          {/* Play button */}
          <span className="absolute inset-0 flex items-center justify-center">
            <motion.span
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex h-20 w-20 md:h-24 md:w-24 items-center justify-center rounded-full bg-gradient-red shadow-red"
            >
              <span className="absolute inset-0 rounded-full border border-primary-glow/50 animate-ping [animation-duration:2.5s]" />
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="ml-1 h-8 w-8 md:h-10 md:w-10 text-primary-foreground"
              >
                <path d="M8 5.14v13.72L19 12 8 5.14Z" />
              </svg>
            </motion.span>
          </span>
        </button>
      )}
    </div>
  );
}
