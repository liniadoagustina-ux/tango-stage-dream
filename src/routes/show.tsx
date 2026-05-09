import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import stage2 from "@/assets/stage/stage-2.jpg";

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
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,oklch(0.35_0.18_25/0.55),transparent_65%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,oklch(0.28_0.14_20/0.45),transparent_55%)]" />
        </motion.div>
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
