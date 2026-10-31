import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { images } from "@/data/images";
const slides = [images["stage-1"], images["stage-3"], images["stage-5"], images["stage-4"]];

export function Hero() {
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reducedMotion) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, [reducedMotion]);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden vignette bg-background">
      {/* Stage photography backdrop */}
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={slides[index]?.url}
          width={1920}
          height={1280}
          alt="Luizaga Brothers on stage"
          fetchPriority="high"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-background/25 via-background/15 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.13_0.01_20/0.85)_90%)]" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.h1
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-[8rem] leading-[0.95] text-balance text-foreground text-shadow-dramatic max-w-5xl"
          >
            Where the embrace<br/>
            <span className="text-foreground">takes flight.</span>
          </motion.h1>
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: reducedMotion ? 0 : 0.4 }}
            className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed"
          >
            Leonardo and Edgar Luizaga fuse Argentine tango, aerial performance and physical theatre.
          </motion.p>

          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild className="h-auto"><Link
              to="/show"
              className="inline-flex items-center px-8 py-4 bg-gradient-red text-primary-foreground text-sm uppercase tracking-[0.1em] font-medium rounded-sm shadow-red hover:translate-y-[-2px] transition-transform"
            >
              Discover the show
            </Link></Button>
            <Button asChild variant="outline" className="h-auto"><a
              href="mailto:luizagabros@gmail.com"
              className="inline-flex items-center px-8 py-4 border border-foreground/40 text-foreground text-sm uppercase tracking-[0.1em] font-medium rounded-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Booking
            </a></Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={reducedMotion ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sm uppercase tracking-[0.1em] text-foreground/60 z-10"
      >
        Scroll
      </motion.div>
    </section>
  );
}
