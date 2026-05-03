import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { artists, type Artist } from "@/data/artists";
import { ArtistCard } from "@/components/ArtistCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/artists")({
  head: () => ({
    meta: [
      { title: "Artists — Luizaga Brothers" },
      { name: "description", content: "Meet the dancers, choreographers and musicians of Luizaga Brothers — world champions of tango and international stage artists." },
      { property: "og:title", content: "Artists — Luizaga Brothers" },
      { property: "og:description", content: "Bodies that speak. The ensemble of Luizaga Brothers." },
    ],
  }),
  component: ArtistsPage,
});

function ArtistsPage() {
  const [active, setActive] = useState<Artist | null>(null);

  return (
    <>
      <section className="pt-40 pb-16 md:pt-52 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-luxe text-primary-glow mb-5">The Ensemble</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
              Artists who write with the body.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {artists.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.06}>
              <ArtistCard artist={a} onOpen={() => setActive(a)} />
            </Reveal>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl overflow-y-auto"
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="min-h-screen max-w-5xl mx-auto p-6 md:p-12"
            >
              <button
                onClick={() => setActive(null)}
                className="sticky top-4 ml-auto block p-2 text-foreground/70 hover:text-foreground"
                aria-label="Close"
              >
                <X className="size-7" />
              </button>
              <div className="grid md:grid-cols-[2fr_3fr] gap-8 md:gap-12 mt-4">
                <div className="aspect-[3/4] overflow-hidden rounded-sm">
                  <img src={active.image} alt={active.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-luxe text-primary-glow mb-3">
                    {active.discipline}
                  </p>
                  <h2 className="font-serif text-4xl md:text-5xl leading-tight">{active.name}</h2>
                  <p className="mt-2 text-sm uppercase tracking-luxe text-muted-foreground">
                    {active.role}
                  </p>
                  <p className="mt-6 font-serif italic text-xl text-foreground/85 border-l-2 border-primary pl-5">
                    “{active.poetic}”
                  </p>
                  <div className="mt-8 space-y-5 text-base text-foreground/85 leading-relaxed">
                    {active.bio.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
