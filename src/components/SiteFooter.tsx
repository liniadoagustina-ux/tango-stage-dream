import { Link, useLocation } from "@tanstack/react-router";
import { images } from "@/data/images";
import { footerCopy, langFromPath, navItems } from "@/lib/i18n";
const logo = images.logo;

export function SiteFooter() {
  const location = useLocation();
  const lang = langFromPath(location.pathname);
  const copy = footerCopy[lang];
  const exploreLinks = navItems[lang].slice(1);

  return (
    <footer className="relative mt-8 md:mt-16 border-t border-border/50 bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2 space-y-5">
          <img src={logo.url} width={logo.width} height={logo.height} loading="lazy" alt="Luizaga Brothers" className="h-20 w-auto" />
          <div className="h-px w-24 bg-gradient-to-r from-primary via-gold/60 to-transparent" />
          <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
            {copy.tagline}
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-luxe text-foreground mb-4">
            {copy.explore}
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {exploreLinks.map((item) => (
              <li key={item.to}><Link to={item.to} className="hover:text-foreground">{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-luxe text-foreground mb-4">
            {copy.bookings}
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:luizagabros@gmail.com" className="hover:text-foreground">
                luizagabros@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground tracking-wide">
          <span>© {new Date().getFullYear()} Luizaga Brothers Production. {copy.rights}</span>
        </div>
      </div>
    </footer>
  );
}
