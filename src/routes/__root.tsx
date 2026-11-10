import { Button } from "@/components/ui/button";
import { Outlet, Link, createRootRoute, HeadContent, Scripts, useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { LANG_STORAGE_KEY, langFromPath, pathForLang, preferredLanguage } from "@/lib/i18n";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Lost in the wings</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you're looking for has left the stage.
        </p>
        <Button asChild className="h-auto"><Link
          to="/"
          className="mt-8 inline-flex px-6 py-3 bg-gradient-red text-primary-foreground text-sm uppercase tracking-[0.1em] rounded-sm"
        >
          Return home
        </Link></Button>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  staticData: { sitemap: false },
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400;1,500&family=Bodoni+Moda:opsz,wght@6..96,600&family=Jost:wght@300;400;500&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <html lang={langFromPath(pathname)} className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function LanguageRedirect() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    let stored: string | null = null;
    try { stored = localStorage.getItem(LANG_STORAGE_KEY); } catch { return; }
    const current = langFromPath(pathname);
    const preferred = preferredLanguage(stored, navigator.language ?? "en");
    if (!stored) {
      try { localStorage.setItem(LANG_STORAGE_KEY, preferred); } catch { /* storage unavailable */ }
    }
    if (preferred !== current) {
      window.location.replace(pathForLang(pathname, preferred));
    }
  }, [pathname]);
  return null;
}

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <LanguageRedirect />
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
