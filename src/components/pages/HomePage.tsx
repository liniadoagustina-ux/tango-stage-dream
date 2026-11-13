import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Trailer } from "@/components/Trailer";
import { SectionHeading } from "@/components/SectionHeading";
import { artists } from "@/data/artists";
import { images } from "@/data/images";
import { homeCopy, footerCopy, type Lang } from "@/lib/i18n";
const stageTango = images["stage-tango"].url;
const stageAerial = images["stage-5"].url;
const stageTheatre = images["stage-4"].url;
const showLogoAsset = images["la-muerte-del-angel-137"];
const pillarImages = [stageTango, stageAerial, stageTheatre];

export function HomePage({ lang }: { lang: Lang }) {
  const copy = homeCopy[lang];
  return (
    <>
      <Hero lang={lang} />

      <section className="relative py-16 md:py-20 px-6 bg-background surface-2 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-curtain opacity-40" />
        <div className="relative max-w-4xl mx-auto text-center">
          <span className="mx-auto mb-8 block h-px w-16 bg-primary" />
          <p className="font-serif text-3xl md:text-5xl leading-tight text-balance">{copy.manifesto}</p>
          <p className="mt-6 text-xs md:text-sm uppercase tracking-luxe text-primary/70">{footerCopy[lang].tagline}</p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 md:py-20 px-6 bg-background surface-1">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-2 md:gap-4">
          {copy.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-border/60 bg-card">
                <img
                  width={1920} height={1280} src={pillarImages[i]}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-2 md:p-8">
                  <h3 className="font-serif text-sm md:text-3xl leading-tight mb-0 md:mb-2">{p.title}</h3>
                  <p className="hidden md:block text-sm text-muted-foreground max-w-xs">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Show teaser */}
      <section className="relative py-16 md:py-20 px-6 overflow-hidden bg-background surface-3">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal delay={0.1}>
            <figure className="relative block w-full max-w-4xl overflow-hidden shadow-deep ring-1 ring-primary/40">
              <img width={showLogoAsset.width} height={showLogoAsset.height} loading="lazy" src={showLogoAsset.url} alt="La Muerte del Ángel — Luizaga Brothers" className="block w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-10">
                <span className="block h-px w-16 bg-primary mb-4" />
                <span className="block font-serif text-foreground leading-[0.95] text-3xl sm:text-5xl md:text-6xl drop-shadow-lg">{copy.showTitle}</span>
              </figcaption>
            </figure>

          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-xl text-lg text-foreground/85 leading-relaxed">
              {copy.showText}
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <Button asChild className="h-auto"><Link
              to={copy.showTo}
              className="mt-10 inline-flex items-center px-8 py-4 bg-gradient-red text-primary-foreground text-sm uppercase tracking-[0.1em] rounded-sm shadow-red"
            >
              {copy.showCta}
            </Link></Button>
          </Reveal>
          <Reveal delay={0.45}>
            <div id="trailer" className="mt-16 max-w-3xl scroll-mt-24">
              <Trailer compact lang={lang} />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Artists strip */}
      <section className="pt-12 pb-6 md:pt-20 md:pb-16 px-6 bg-background surface-1">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <Reveal>
              <SectionHeading className="mb-0">{copy.castHeading}</SectionHeading>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to={copy.castLinkTo}
                className="text-xs uppercase tracking-luxe text-foreground/80 hover:text-foreground border-b border-foreground/30 pb-1"
              >
                {copy.castLink}
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {artists.slice(0, 4).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Link to={copy.castLinkTo} className="block group relative aspect-[4/5] overflow-hidden rounded-sm">
                  <img
                    width={a.imageWidth} height={a.imageHeight} src={a.portraits?.[0] ?? a.image}
                    alt={a.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-serif text-lg leading-tight">{a.name}</p>
                    <p className="text-xs uppercase tracking-luxe text-muted-foreground mt-1">
                      {lang !== "en" ? copy.castRoles[i] : (a.character ?? a.discipline)}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
