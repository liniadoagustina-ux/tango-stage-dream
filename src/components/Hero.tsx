import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import stage1 from "@/assets/stage/stage-1.jpg";
import stage3 from "@/assets/stage/stage-3.jpg";
import stage4 from "@/assets/stage/stage-4.jpg";

const slides = [stage1, stage3, stage4];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden vignette bg-background">
      {/* Stage photography backdrop */}
      <AnimatePresence mode="sync">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.6 }, scale: { duration: 7, ease: "easeOut" } }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index]})` }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,oklch(0.13_0.01_20/0.85)_90%)]" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-24 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xs md:text-sm uppercase tracking-luxe text-primary-glow mb-6 animate-shimmer"
          >
            ·  An Argentine Stage Spectacle  ·
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-5xl md:text-7xl lg:text-[8rem] leading-[0.95] text-balance text-foreground text-shadow-dramatic max-w-5xl"
          >
            Where the embrace<br/>
            <span className="italic text-primary-glow">takes flight.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.1 }}
            className="mt-8 max-w-xl text-base md:text-lg text-foreground/80 leading-relaxed"
          >
            Luizaga Brothers fuse Argentine tango, aerial performance and
            physical theatre into a single, breath-held language of the body.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/show"
              className="inline-flex items-center px-8 py-4 bg-gradient-red text-primary-foreground text-xs uppercase tracking-luxe font-medium rounded-sm shadow-red hover:translate-y-[-2px] transition-transform"
            >
              Discover the Show
            </Link>
            <a
              href="mailto:luizagabros@gmail.com"
              className="inline-flex items-center px-8 py-4 border border-foreground/40 text-foreground text-xs uppercase tracking-luxe font-medium rounded-sm hover:bg-foreground hover:text-background transition-colors"
            >
              Booking
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-luxe text-foreground/60 z-10"
      >
        Scroll
      </motion.div>
    </section>
  );
}
