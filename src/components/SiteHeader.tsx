import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const nav = [
  { to: "/", label: "Home" },
  { to: "/show", label: "The Show" },
  { to: "/company", label: "The Company" },
  { to: "/artists", label: "Artists" },
] as const;

export function SiteHeader() {
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
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Luizaga Brothers"
            className="h-9 md:h-10 w-auto transition-transform duration-500 group-hover:scale-105"
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
                className="relative text-xs uppercase tracking-luxe font-medium text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-2 left-0 right-0 h-px bg-primary"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <a
            href="mailto:luizagabros@gmail.com"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs uppercase tracking-luxe font-medium bg-gradient-red text-primary-foreground rounded-sm shadow-red hover:opacity-90 transition-opacity"
          >
            Booking
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-foreground p-2"
          aria-label="Menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
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
              <a
                href="mailto:luizagabros@gmail.com"
                className="mt-2 inline-flex justify-center px-5 py-3 text-xs uppercase tracking-luxe bg-gradient-red text-primary-foreground rounded-sm"
              >
                Booking
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
