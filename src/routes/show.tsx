import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Trailer } from "@/components/Trailer";
import { motion } from "framer-motion";
import stage2 from "@/assets/stage/stage-2.jpg";
import showLogoAsset from "@/assets/show/la-muerte-del-angel-official.png.asset.json";

export const Route = createFileRoute("/show")({
  head: () => ({
    meta: [
      { title: "La Muerte del Ángel — The Show · Luizaga Brothers" },
      { name: "description", content: "La Muerte del Ángel — the current Luizaga Brothers production. An immersive tango spectacle." },
      { property: "og:title", content: "La Muerte del Ángel — Luizaga Brothers" },
      { property: "og:description", content: "An immersive evening of tango, aerial choreography and live music." },
    ],
  }),
  component: ShowPage,
});

function ShowPage() {
  return (
    <>
      <section className="relative h-[80vh] min-h-[520px] overflow-hidden vignette bg-background">
        <motion.div
          initial={{ scale: 1.1, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 6, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${stage2})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.13_0.01_20/0.85)_90%)]" />
        <div className="relative z-10 h-full flex items-end pb-12 md:pb-16 px-6">
          <div className="max-w-7xl mx-auto w-full">
            <p className="text-xs uppercase tracking-luxe text-primary-glow mb-5">The Show · 2025 — 2026</p>
            <motion.img
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              src={showLogoAsset.url}
              alt="Tango — La Muerte del Ángel"
              className="block w-full max-w-4xl h-auto object-contain shadow-deep"
            />
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


      {/* Official trailer */}
      <section className="py-24 md:py-32 px-6 bg-curtain">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-luxe text-primary-glow mb-4">Official Trailer</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-12">Trailer</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <Trailer />
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-8 text-xs uppercase tracking-luxe text-muted-foreground">
              {"\n"}
            </p>
          </Reveal>
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
            <a
              href="mailto:luizagabros@gmail.com"
              className="mt-8 inline-flex items-center px-8 py-4 bg-gradient-red text-primary-foreground text-xs uppercase tracking-luxe rounded-sm shadow-red"
            >
              Booking & Enquiries
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
