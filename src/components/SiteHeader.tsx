import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { images } from "@/data/images";
import { Button } from "@/components/ui/button";
import { bookingLabel, LANG_STORAGE_KEY, langFromPath, navItems, pathForLang, type Lang } from "@/lib/i18n";
const logo = images.logo;

function LangSwitch({ pathname, className = "" }: { pathname: string; className?: string }) {
  const lang = langFromPath(pathname);
  const remember = (l: Lang) => {
    try { localStorage.setItem(LANG_STORAGE_KEY, l); } catch { /* storage unavailable */ }
  };
  const linkClass = (l: Lang) =>
    `text-xs uppercase tracking-[0.1em] font-medium transition-colors ${
      lang === l ? "text-foreground" : "text-foreground/50 hover:text-foreground"
    }`;
  return (
    <div className={`flex items-center gap-2 ${className}`} aria-label="Language">
      <a href={pathForLang(pathname, "es")} onClick={() => remember("es")} aria-current={lang === "es" ? "true" : undefined} className={linkClass("es")}>ES</a>
      <span className="text-foreground/30 text-xs">|</span>
      <a href={pathForLang(pathname, "en")} onClick={() => remember("en")} aria-current={lang === "en" ? "true" : undefined} className={linkClass("en")}>EN</a>
      <span className="text-foreground/30 text-xs">|</span>
      <a href={pathForLang(pathname, "fr")} onClick={() => remember("fr")} aria-current={lang === "fr" ? "true" : undefined} className={linkClass("fr")}>FR</a>
    </div>
  );
}

export function SiteHeader() {
  const reducedMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const lang = langFromPath(location.pathname);
  const nav = navItems[lang];

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
        <Link to={lang === "fr" ? "/fr" : lang === "es" ? "/es" : "/"} className="flex items-center gap-3 group">
          <img
            src={logo.url} width={logo.width} height={logo.height}
            alt="Luizaga Brothers"
            className="h-11 md:h-14 w-auto transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {nav.map((item) => {
            const active =
              item.to === "/" || item.to === "/es" || item.to === "/fr"
                ? location.pathname === item.to
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

        <div className="hidden lg:flex items-center gap-6">
          <LangSwitch pathname={location.pathname} />
          <Button asChild className="h-auto">
          <a
            href="mailto:luizagabros@gmail.com"
            className="inline-flex items-center justify-center px-5 py-2.5 text-sm uppercase tracking-[0.1em] font-medium bg-gradient-red text-primary-foreground rounded-sm shadow-red hover:opacity-90 transition-opacity"
          >
            {bookingLabel[lang]}
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
              <LangSwitch pathname={location.pathname} className="pt-1" />
              <Button asChild className="h-auto">
              <a
                href="mailto:luizagabros@gmail.com"
                className="mt-2 inline-flex justify-center px-5 py-3 text-sm uppercase tracking-[0.1em] bg-gradient-red text-primary-foreground rounded-sm"
              >
                {bookingLabel[lang]}
              </a></Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
