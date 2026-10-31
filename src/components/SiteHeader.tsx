import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { images } from "@/data/images";
import { Button } from "@/components/ui/button";
const logo = images.logo;

const nav = [
  { to: "/", label: "Home" },
  { to: "/show", label: "The Show" },
  { to: "/company", label: "The Company" },
  { to: "/artists", label: "Artists" },
] as const;

export function SiteHeader() {
  const reducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo.url} width={logo.width} height={logo.height}
            alt="Luizaga Brothers"
            className="h-11 md:h-14 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => {
            const active =
              item.to === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative text-sm uppercase tracking-[0.1em] font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId={reducedMotion ? undefined : "nav-underline"}
                    transition={{ duration: reducedMotion ? 0 : 0.2 }}
                    className="absolute -bottom-2 left-0 right-0 h-px bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="h-auto">
          <a
            href="mailto:luizagabros@gmail.com"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm uppercase tracking-[0.1em] font-medium bg-gradient-red text-primary-foreground rounded-sm shadow-red hover:opacity-90 transition-opacity"
          >
            Booking
          </a></Button>
        </div>

        <Button variant="ghost" size="icon"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </Button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.2 }}
            className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-xl border-t border-border/60"
          >
            <nav className="flex flex-col px-6 py-6 gap-5">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm uppercase tracking-luxe text-foreground/85"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="h-auto">
              <a
                href="mailto:luizagabros@gmail.com"
                className="mt-2 inline-flex justify-center px-5 py-3 text-sm uppercase tracking-[0.1em] bg-gradient-red text-primary-foreground rounded-sm"
              >
                Booking
              </a></Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
