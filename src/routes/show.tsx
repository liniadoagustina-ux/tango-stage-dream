import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import embrace from "@/assets/gallery/tango-embrace.jpg";
import aerial from "@/assets/gallery/aerial-silk.jpg";
import bandoneon from "@/assets/gallery/bandoneon.jpg";
import ensemble from "@/assets/gallery/ensemble.jpg";

export const Route = createFileRoute("/show")({
  head: () => ({
    meta: [
      { title: "La Muerte del Ángel — The Show · Luizaga Brothers" },
      { name: "description", content: "La Muerte del Ángel — the current Luizaga Brothers production. An immersive tango spectacle." },
      { property: "og:title", content: "La Muerte del Ángel — Luizaga Brothers" },
      { property: "og:description", content: "An immersive evening of tango, aerial choreography and live music." },
      { property: "og:image", content: embrace },
    ],
  }),
  component: ShowPage,
});

function ShowPage() {
  return (
    <>
      <section className="relative h-[80vh] min-h-[520px] overflow-hidden vignette">
        <motion.img
          initial={{ scale: 1.15 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 6, ease: "easeOut" }}
          src={embrace}
          alt="La Muerte del Ángel"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/30" />
        <div className="relative z-10 h-full flex items-end pb-24 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs uppercase tracking-luxe text-primary-glow mb-5">The Show · 2025 — 2026</p>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.9] text-balance">
              La Muerte<br/><span className="italic text-primary-glow">del Ángel</span>
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="font-serif italic text-2xl md:text-3xl leading-relaxed text-balance text-foreground/90">
              An angel falls. The orchestra mourns. The embrace lifts off the floor.
              For seventy minutes, the theatre forgets its own gravity.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-10 text-base md:text-lg text-muted-foreground leading-relaxed">
              <span className="text-foreground">La Muerte del Ángel</span> is a seven-movement spectacle
              built from Argentine tango, aerial choreography, physical theatre and a live tango orchestra.
              Choreographed and directed by Leonardo and Edgar Luizaga, it transforms Piazzolla's
              lament into a contemporary stage ritual where bodies suspend, fall, embrace and
              speak — without uttering a word.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-3">
          {[aerial, ensemble, bandoneon].map((src, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img src={src} alt="" loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-1000" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-curtain">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { k: "70", l: "Minutes" },
            { k: "12", l: "Artists on stage" },
            { k: "7", l: "Movements" },
          ].map((s, i) => (
            <Reveal key={s.l} delay={i * 0.1}>
              <div className="text-center md:text-left">
                <div className="font-serif text-7xl md:text-8xl text-primary-glow leading-none">{s.k}</div>
                <p className="mt-3 text-xs uppercase tracking-luxe text-muted-foreground">{s.l}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl">See it live.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/tour"
              className="mt-8 inline-flex items-center px-8 py-4 bg-gradient-red text-primary-foreground text-xs uppercase tracking-luxe rounded-sm shadow-red"
            >
              Tour Dates & Tickets
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
