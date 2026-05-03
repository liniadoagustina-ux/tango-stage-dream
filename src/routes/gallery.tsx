import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { gallery } from "@/data/gallery";
import { Lightbox } from "@/components/Lightbox";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Luizaga Brothers" },
      { name: "description", content: "Stage photography from Luizaga Brothers productions — tango, aerial and theatre." },
      { property: "og:title", content: "Gallery — Luizaga Brothers" },
      { property: "og:description", content: "A visual archive of the stage." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const [open, setOpen] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <section className="pt-40 pb-12 md:pt-52 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-luxe text-primary-glow mb-5">Gallery</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              The stage,<br/>
              <span className="italic text-primary-glow">remembered.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {gallery.map((img, i) => (
            <Reveal key={i} delay={(i % 6) * 0.05}>
              <button
                onClick={() => setOpen({ src: img.src, alt: img.alt })}
                className="group relative mb-5 block w-full overflow-hidden rounded-sm break-inside-avoid"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/15 transition-colors" />
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <Lightbox src={open?.src ?? null} alt={open?.alt} onClose={() => setOpen(null)} />
    </>
  );
}
