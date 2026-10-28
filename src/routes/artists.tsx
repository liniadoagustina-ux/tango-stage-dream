import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { artists, type Artist } from "@/data/artists";
import { ArtistCard } from "@/components/ArtistCard";
import { Reveal } from "@/components/Reveal";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

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
            <Reveal key={a.slug} delay={i * 0.04}>
              <ArtistCard artist={a} onOpen={() => setActive(a)} />
            </Reveal>
          ))}
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogPortal>
          <DialogOverlay className="bg-background/85 backdrop-blur-xl" />
          <DialogPrimitive.Content
            className="fixed left-[50%] top-[50%] z-50 block w-[95vw] max-w-5xl max-h-[90vh] translate-x-[-50%] translate-y-[-50%] overflow-y-auto md:overflow-hidden border border-border/40 bg-background/95 p-0 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 sm:rounded-sm"
          >
            {active && (
              <>
                <DialogTitle className="sr-only">{active.name}</DialogTitle>
                <DialogDescription className="sr-only">{active.role}</DialogDescription>

                <div className="flex flex-col md:flex-row md:max-h-[90vh]">
                  <div className="relative overflow-hidden bg-background md:w-[42%] md:shrink-0 md:min-h-[60vh] md:max-h-[90vh]">
                    <img
                      src={active.image}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover scale-110 blur-2xl opacity-40"
                    />
                    <div className="absolute inset-0 bg-background/50" />
                    <img
                      src={active.image}
                      alt={active.name}
                      className="relative block w-full h-auto md:absolute md:inset-0 md:h-full md:object-contain"
                    />
                  </div>
                  <div className="p-7 md:p-10 lg:p-12 md:flex-1 md:overflow-y-auto md:max-h-[90vh]">
                    <p className="text-[10px] uppercase tracking-luxe text-primary-glow mb-3">
                      {active.discipline}
                    </p>
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
                      {active.name}
                    </h2>
                    <p className="mt-2 text-xs md:text-sm uppercase tracking-luxe text-muted-foreground">
                      {active.role}
                    </p>
                    <p className="mt-6 font-serif italic text-lg md:text-xl text-foreground/85 border-l-2 border-primary pl-5">
                      “{active.poetic}”
                    </p>
                    <div className="mt-7 space-y-4 text-[15px] md:text-base text-foreground/90 leading-relaxed">
                      {active.bio.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  </div>
                </div>

                <DialogPrimitive.Close
                  aria-label="Close"
                  className="absolute right-4 top-4 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground size-10 shadow-lg ring-1 ring-primary/40 transition-all hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <X className="size-5" />
                </DialogPrimitive.Close>
              </>
            )}
          </DialogPrimitive.Content>
        </DialogPortal>
      </Dialog>
    </>
  );
}
