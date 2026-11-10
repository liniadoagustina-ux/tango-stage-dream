import { Button } from "@/components/ui/button";
import type { PresentedArtist } from "@/data/artist-presentation";

import { mediaCopy, type Lang } from "@/lib/i18n";

export function ArtistCard({ artist, onOpen, lang = "en" }: { artist: PresentedArtist; onOpen: () => void; lang?: Lang }) {
  return (
    <Button variant="ghost"
      onClick={onOpen}
      aria-label={`${mediaCopy[lang].biography} ${artist.name}`}
      className="group relative flex h-full w-full flex-col items-stretch justify-start p-0 whitespace-normal text-left overflow-hidden rounded-sm bg-background hover:bg-background"
    >
      <div className="relative w-full aspect-[3/4] overflow-hidden bg-background">
      <img
        src={artist.image}
        width={artist.imageWidth}
        height={artist.imageHeight}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover scale-110 blur-2xl opacity-35"
      />
      <div className="absolute inset-0 bg-background/50" />
      <img
        src={artist.image}
        width={artist.imageWidth}
        height={artist.imageHeight}
        alt={artist.name}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-contain"
      />
      <div className="pointer-events-none absolute inset-0 bg-primary opacity-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-70 group-focus-visible:opacity-70" />
      </div>
      <div className="w-full border-t border-primary/40 pt-5 pb-6">
        <h3 className="font-serif text-xl md:text-3xl text-foreground leading-tight">
          {artist.name}
        </h3>
        <p
          className="mt-3 text-sm tracking-normal text-foreground/85 leading-relaxed"
        >
          {artist.role}
        </p>
        {artist.responsibilities && <p className="mt-1 text-sm tracking-normal text-foreground/85 leading-relaxed">{artist.responsibilities}</p>}
        <p className="mt-3 text-sm tracking-normal text-muted-foreground leading-relaxed font-normal">{artist.credit}</p>
      </div>
    </Button>
  );
}
