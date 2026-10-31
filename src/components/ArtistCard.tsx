import { Button } from "@/components/ui/button";
import type { Artist } from "@/data/artists";

export function ArtistCard({ artist, onOpen }: { artist: Artist; onOpen: () => void }) {
  return (
    <Button variant="ghost"
      onClick={onOpen}
      className="group relative block h-auto w-full p-0 whitespace-normal text-left overflow-hidden rounded-sm bg-card aspect-[3/4]"
    >
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
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
        <h3 className="font-serif text-2xl md:text-3xl text-foreground leading-tight">
          {artist.name}
        </h3>
        <p
          className="mt-3 text-sm text-foreground/85 italic font-serif leading-relaxed"
        >
          “{artist.poetic}”
        </p>
      </div>
    </Button>
  );
}
