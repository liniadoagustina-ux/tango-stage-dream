import { useState } from "react";
import { X } from "lucide-react";
import { artistGroups, type PresentedArtist } from "@/data/artist-presentation";
import { ArtistCard } from "@/components/ArtistCard";
import {
  Dialog,
  DialogTitle,
  DialogDescription,
  DialogPortal,
  DialogOverlay,
} from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { artistsCopyEs, artistsCopyFr, artistBiographiesEs, artistBiographiesFr, artistGroupHeadingsEs, artistGroupHeadingsFr, mediaCopy, type Lang } from "@/lib/i18n";

export function ArtistsPage({ lang = "en" }: { lang?: Lang }) {
  const artistCopy = lang === "fr" ? artistsCopyFr : lang === "es" ? artistsCopyEs : null;
  const groupHeadings = lang === "fr" ? artistGroupHeadingsFr : lang === "es" ? artistGroupHeadingsEs : null;
  const biographies = lang === "fr" ? artistBiographiesFr : lang === "es" ? artistBiographiesEs : null;
  const groups = artistCopy ? artistGroups.map(group => ({ ...group, members: group.members.map(artist => {
    const copy = artistCopy[artist.slug];
    return copy ? { ...artist, ...copy, responsibilities: copy.responsibilities ?? undefined, bio: biographies?.[artist.slug] ?? artist.bio } : artist;
  }) })) : artistGroups;
  const [active, setActive] = useState<PresentedArtist | null>(null);

  return (
    <>
      <section className="pt-28 pb-12 md:pt-52 md:pb-24 px-6">
        <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-4xl">
              {lang === "fr" ? "La Distribution" : lang === "es" ? "El Elenco" : "The Cast"}
            </h1>
        </div>
      </section>

      {groups.map((group, i) => (
        <section key={group.heading} className={`px-6 pt-12 pb-16 md:pt-20 md:pb-32 bg-background ${["surface-1", "surface-2", "surface-3"][i % 3]}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif font-bold italic underline decoration-2 underline-offset-8 text-gold text-glow-gold text-5xl md:text-6xl mb-8 md:mb-12">{groupHeadings?.[group.heading] ?? group.heading}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-x-8 gap-y-8">
              {group.members.map(artist => <ArtistCard key={artist.slug} lang={lang} artist={artist} onOpen={() => setActive(artist)} />)}
            </div>
          </div>
        </section>
      ))}

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
                      src={active.image} width={active.imageWidth} height={active.imageHeight}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover scale-110 blur-2xl opacity-40"
                    />
                    <div className="absolute inset-0 bg-background/50" />
                    <img
                      src={active.image} width={active.imageWidth} height={active.imageHeight}
                      alt={active.name}
                      className="relative block w-full h-auto md:absolute md:inset-0 md:h-full md:object-contain"
                    />
                  </div>
                  <div className="p-7 md:p-10 lg:p-12 md:flex-1 md:overflow-y-auto md:max-h-[90vh]">
                    <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground">
                      {active.name}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {active.role}
                    </p>
                    {active.responsibilities && <p className="mt-1 text-sm text-muted-foreground">{active.responsibilities}</p>}
                    <p className="mt-6 text-sm text-foreground/85 leading-relaxed">{active.credit}</p>
                    <div className="mt-7 space-y-4 text-[15px] md:text-base text-foreground/90 leading-relaxed">
                      {active.bio.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  </div>
                </div>

                <DialogPrimitive.Close
                  aria-label={mediaCopy[lang].close}
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
