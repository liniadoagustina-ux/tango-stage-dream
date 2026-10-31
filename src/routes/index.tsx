import { Button } from "@/components/ui/button";
import { pageSEO } from "@/lib/seo";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { Trailer } from "@/components/Trailer";
import { artists } from "@/data/artists";
import { images } from "@/data/images";
const stageTango = images["stage-tango"].url;
const stageAerial = images["stage-5"].url;
const stageTheatre = images["stage-4"].url;
const showLogoAsset = images["la-muerte-del-angel-137"];

export const Route = createFileRoute("/")({
  staticData: { sitemap: true },
  head: () => pageSEO("/", "Luizaga Brothers — Argentine Tango, Aerial & Theatre", "Luizaga Brothers: Argentine tango, aerial performance and physical theatre by Leonardo and Edgar Luizaga. Now touring Tango – La Muerte del Ángel."),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <section className="relative py-16 md:py-44 px-6 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-serif text-3xl md:text-5xl leading-tight text-balance">Tango is their starting point: taken apart and rebuilt with circus, physical theatre and visual design.</p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-12 md:py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6 md:gap-4">
          {[
            { title: "Tango", text: "The embrace, fragmented and rebuilt.", image: stageTango },
            { title: "Aerial", text: "Suspension. Flight. Risk. The body free of the floor.", image: stageAerial },
            { title: "Theatre", text: "Atmosphere, dramaturgy and spatial composition.", image: stageTheatre },
          ].map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="group relative aspect-[3/4] overflow-hidden rounded-sm border border-border/60 bg-card">
                <img
                  width={1920} height={1280} src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-contain "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <h3 className="font-serif text-3xl mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Show teaser */}
      <section className="relative py-16 md:py-44 px-6 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/30" />
        <div className="relative max-w-7xl mx-auto">
          <Reveal delay={0.1}>
            <figure className="relative block w-full max-w-4xl overflow-hidden shadow-deep ring-1 ring-primary/40">
              <img width={showLogoAsset.width} height={showLogoAsset.height} loading="lazy" src={showLogoAsset.url} alt="La Muerte del Ángel — Luizaga Brothers" className="block w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 p-5 md:p-10">
                <span className="block h-px w-16 bg-primary mb-4" />
                <span className="block font-serif uppercase text-foreground tracking-[0.12em] leading-[0.95] text-3xl sm:text-5xl md:text-6xl drop-shadow-lg">Tango – La Muerte del Ángel</span>
                <span className="mt-3 block text-xs md:text-xs uppercase tracking-luxe text-foreground/80">Luizaga Brothers, Tango Theatre</span>
              </figcaption>
            </figure>

          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-xl text-lg text-foreground/85 leading-relaxed">
              The myth of Charon, told through tango, folklore, aerial dance and a live band. 70 minutes.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <Button asChild className="h-auto"><Link
              to="/show"
              className="mt-10 inline-flex items-center px-8 py-4 bg-gradient-red text-primary-foreground text-sm uppercase tracking-[0.1em] rounded-sm shadow-red"
            >
              Discover the show
            </Link></Button>
          </Reveal>
          <Reveal delay={0.45}>
            <div className="mt-16 max-w-3xl">
              <Trailer compact />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Artists strip */}
      <section className="py-12 md:py-32 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
            <Reveal>
              <div>
                <h2 className="font-serif text-4xl md:text-5xl">The cast</h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <Link
                to="/artists"
                className="text-xs uppercase tracking-luxe text-foreground/80 hover:text-foreground border-b border-foreground/30 pb-1"
              >
                See all artists
              </Link>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {artists.slice(0, 4).map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.08}>
                <Link to="/artists" className="block group relative aspect-[3/4] overflow-hidden rounded-sm">
                  <img
                    width={a.imageWidth} height={a.imageHeight} src={a.image}
                    alt={a.name}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-contain "
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-serif text-lg leading-tight">{a.name}</p>
                    <p className="text-xs uppercase tracking-luxe text-muted-foreground mt-1">
                      {a.discipline}
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
