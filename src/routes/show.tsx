import { Button } from "@/components/ui/button";
import { pageSEO } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { Trailer } from "@/components/Trailer";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/data/images";
const showLogoAsset = images["la-muerte-del-angel-137"];

export const Route = createFileRoute("/show")({
  staticData: { sitemap: true },
  head: () => pageSEO("/show", "La Muerte del Ángel — The Show | Luizaga Brothers", "La Muerte del Ángel — the current Luizaga Brothers production. An immersive tango spectacle."),
  component: ShowPage,
});

function ShowPage() {
  const reducedMotion = useReducedMotion();
  return (
    <>
      <section className="relative w-full overflow-hidden vignette bg-background">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.13_0.01_20/0.85)_90%)]" />
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.4 }} className="relative z-10">
          <figure className="relative block w-full overflow-hidden shadow-deep ring-1 ring-primary/40">
            <img src={showLogoAsset.url} width={showLogoAsset.width} height={showLogoAsset.height} alt="La Muerte del Ángel — Luizaga Brothers" className="block w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-10">
              <span className="block h-px w-16 bg-primary mb-4" />
              <h1 className="block font-serif uppercase text-foreground tracking-[0.12em] leading-[0.92] text-[2.6rem] md:text-7xl lg:text-[7rem] xl:text-[10rem] drop-shadow-lg">La Muerte del Ángel</h1>
              <span className="mt-3 block text-xs md:text-xs uppercase tracking-luxe text-foreground/80">Luizaga Brothers, Tango Theatre</span>
            </figcaption>
          </figure>
        </motion.div>
      </section>

      <section className="py-12 md:py-32 px-6">
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
      <section className="py-12 md:py-32 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl mb-12">Watch the show</h2>
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


      <section className="py-12 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="font-serif text-4xl md:text-5xl">See it live.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button asChild className="h-auto"><a
              href="mailto:luizagabros@gmail.com"
              className="mt-8 inline-flex items-center px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-[0.1em] rounded-sm shadow-red hover:bg-primary-glow transition-colors"
            >
              Booking & Enquiries
            </a></Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
