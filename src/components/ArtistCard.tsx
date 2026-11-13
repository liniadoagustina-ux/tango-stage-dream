import { Button } from "@/components/ui/button";
import type { PresentedArtist } from "@/data/artist-presentation";

import { mediaCopy, type Lang } from "@/lib/i18n";

export function ArtistCard({ artist, onOpen, lang = "en", className }: { artist: PresentedArtist; onOpen: () => void; lang?: Lang; className?: string }) {
  return (
    <Button variant="ghost"
      onClick={onOpen}
      aria-label={`${mediaCopy[lang].biography} ${artist.name}`}
      className={`group relative flex h-full w-full flex-col items-stretch justify-start p-0 whitespace-normal text-left overflow-hidden rounded-sm bg-background hover:bg-background ${className ?? ""}`}
    >
      <div className="relative w-full overflow-hidden bg-background">
      <div className={`grid gap-1 ${(artist.portraits?.length ?? 1) > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
        {(artist.portraits ?? [artist.image]).map((src, i) => {
          const portraitCount = artist.portraits?.length ?? 1;
          const aspect = portraitCount > 1 ? "aspect-[2/5]" : artist.wide ? "aspect-[8/5]" : "aspect-[4/5]";
          return (
            <img key={src} src={src} width={960} height={1200} alt={i === 0 ? artist.name : ""} loading="lazy" decoding="async"
              className={`block w-full object-cover object-[50%_30%] ${aspect}`} />
          );
        })}
      </div>
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
