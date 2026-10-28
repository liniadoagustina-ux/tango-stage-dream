import { motion } from "framer-motion";
import type { Artist } from "@/data/artists";

export function ArtistCard({ artist, onOpen }: { artist: Artist; onOpen: () => void }) {
  return (
    <motion.button
      onClick={onOpen}
      whileHover="hover"
      initial="rest"
      animate="rest"
      className="group relative block w-full text-left overflow-hidden rounded-sm bg-card aspect-[3/4]"
    >
      <img
        src={artist.image}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover scale-110 blur-2xl opacity-35"
      />
      <div className="absolute inset-0 bg-background/50" />
      <motion.img
        src={artist.image}
        alt={artist.name}
        loading="lazy"
        variants={{
          rest: { scale: 1, filter: "grayscale(0.6) brightness(0.85)" },
          hover: { scale: 1.03, filter: "grayscale(0) brightness(1)" },
        }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full object-contain"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <motion.div
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 bg-primary/20 mix-blend-multiply"
      />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <p className="text-[10px] uppercase tracking-luxe text-primary-glow mb-2">
          {artist.discipline}
        </p>
        <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
          {artist.name}
        </h3>
        <motion.p
          variants={{
            rest: { opacity: 0, y: 10 },
            hover: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="mt-3 text-sm text-foreground/85 italic font-serif leading-relaxed"
        >
          “{artist.poetic}”
        </motion.p>
      </div>
    </motion.button>
  );
}
