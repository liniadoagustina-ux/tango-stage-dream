import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { MapPin, Calendar } from "lucide-react";

export const Route = createFileRoute("/tour")({
  head: () => ({
    meta: [
      { title: "Tour & Tickets — Luizaga Brothers" },
      { name: "description", content: "Upcoming international tour dates for Luizaga Brothers' La Muerte del Ángel." },
      { property: "og:title", content: "Tour & Tickets — Luizaga Brothers" },
      { property: "og:description", content: "International performances of La Muerte del Ángel." },
    ],
  }),
  component: TourPage,
});

const dates = [
  { date: "Mar 14, 2026", city: "London", venue: "Peacock Theatre", country: "United Kingdom", status: "On sale" },
  { date: "Apr 02, 2026", city: "Paris", venue: "Théâtre du Châtelet", country: "France", status: "On sale" },
  { date: "Apr 18, 2026", city: "Madrid", venue: "Teatro Real", country: "Spain", status: "On sale" },
  { date: "May 09, 2026", city: "Milan", venue: "Teatro degli Arcimboldi", country: "Italy", status: "On sale" },
  { date: "Jun 06, 2026", city: "Tokyo", venue: "Bunkamura Orchard Hall", country: "Japan", status: "Soon" },
  { date: "Jul 12, 2026", city: "Seoul", venue: "LG Arts Center", country: "South Korea", status: "Soon" },
  { date: "Sep 04, 2026", city: "Dubai", venue: "Dubai Opera", country: "UAE", status: "Soon" },
  { date: "Oct 17, 2026", city: "New York", venue: "New York City Center", country: "United States", status: "Soon" },
  { date: "Nov 22, 2026", city: "Buenos Aires", venue: "Teatro Coliseo", country: "Argentina", status: "Soon" },
];

function TourPage() {
  return (
    <>
      <section className="pt-40 pb-12 md:pt-52 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="text-xs uppercase tracking-luxe text-primary-glow mb-5">Tour 2026</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95]">
              The world,<br/>
              <span className="italic text-primary-glow">in nine cities.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <ul className="divide-y divide-border/60 border-y border-border/60">
            {dates.map((d, i) => (
              <Reveal key={i} delay={Math.min(i, 8) * 0.04}>
                <li className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] items-center gap-4 md:gap-8 py-7 group hover:bg-card/50 transition-colors px-2">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="size-4 text-primary-glow" />
                    <span className="uppercase tracking-wide">{d.date}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl md:text-3xl group-hover:text-primary-glow transition-colors">
                      {d.city}, {d.country}
                    </h3>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-3.5" />
                      {d.venue}
                    </p>
                  </div>
                  <div>
                    <button
                      className={`px-6 py-3 text-xs uppercase tracking-luxe rounded-sm transition-all ${
                        d.status === "On sale"
                          ? "bg-gradient-red text-primary-foreground shadow-red hover:translate-y-[-2px]"
                          : "border border-border text-muted-foreground"
                      }`}
                    >
                      {d.status === "On sale" ? "Tickets" : "Notify me"}
                    </button>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal>
            <div className="mt-16 p-8 md:p-12 bg-card border border-border/60 rounded-sm text-center">
              <p className="text-xs uppercase tracking-luxe text-primary-glow mb-3">Private bookings</p>
              <h3 className="font-serif text-3xl md:text-4xl">Bring the company to your stage.</h3>
              <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                For festivals, theatres and private commissions — write to our production office.
              </p>
              <a
                href="mailto:contact@luizagabrothers.com"
                className="mt-6 inline-flex px-7 py-3.5 bg-gradient-red text-primary-foreground text-xs uppercase tracking-luxe rounded-sm shadow-red"
              >
                contact@luizagabrothers.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
