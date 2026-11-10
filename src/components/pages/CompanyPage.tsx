import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { companyFacts, trajectories, performanceRegions } from "@/data/company";

import { companyCopyEs, companyCopyFr, bookingLabel, type Lang } from "@/lib/i18n";

export function CompanyPage({ lang = "en" }: { lang?: Lang }) {
  const es = lang === "es";
  const copy = lang === "fr" ? companyCopyFr : es ? companyCopyEs : null;
  const pageTrajectories = copy?.trajectories ?? trajectories;
  const pageRegions = copy?.regions ?? performanceRegions;
  const showTo = lang === "fr" ? "/fr/show" : es ? "/es/show" : "/show";
  return (
    <>
      <section className="relative pt-28 pb-16 md:pt-52 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        <div className="relative max-w-5xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance">{copy?.title ?? "The Company"}</h1>
          <p className="mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-foreground/90">{copy?.intro ?? "Leonardo and Edgar Luizaga have taken Argentine tango to stages across Europe, Asia and the Americas, lifting it off the floor with circus and physical theatre."}</p>
        </div>
      </section>

      <section className="py-12 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">{copy?.originsHeading ?? "Where It Started"}</h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">{copy?.origins ?? <>Born in Zárate, Argentina, Leonardo and Edgar began training at the age of {companyFacts.trainingAge === 5 ? 'five' : companyFacts.trainingAge} in a family of dancers and gymnasts. They studied at the "Instituto Superior de Arte" of the "Teatro Colón" and trained in tango, ballet, flamenco, contemporary dance and circus arts. Both made their international debut at {companyFacts.internationalDebutAge}.</>}</p>
        </div>
      </section>

      <section className="py-12 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-8">{copy?.approachHeading ?? "Their Approach"}</h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground/90">{copy?.approach ?? "Tango is their starting point, but not something to preserve under glass. They take its codes apart and rebuild them with aerial work, physical theatre and visual design, looking for the tension between control and release, the floor and the air."}</p>
        </div>
      </section>

      <section className="py-12 md:py-24 px-6 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-12">{copy?.trajectoryHeading ?? "Trajectory"}</h2>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {pageTrajectories.map(trajectory => (
              <div key={trajectory.name} className="border-t border-primary/40 pt-6 min-w-0">
                <h3 className="font-serif text-3xl mb-6">{trajectory.name}</h3>
                <ul className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/85">
                  {trajectory.achievements.map(achievement => <li key={achievement}>{achievement}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 md:mt-16 border-t border-primary/40 pt-6">
            <h3 className="font-serif text-3xl mb-6">{copy?.togetherHeading ?? "Together"}</h3>
            <ul className="space-y-5 text-base md:text-lg leading-relaxed text-foreground/85">
              {copy ? copy.together.map(achievement => <li key={achievement}>{achievement}</li>) : <>
              <li>Projects in New York, London, Shanghai and Dubai for clients including Marriott International, Bulgari and The Moon Wolf Co.</li>
              <li>Founded Luizaga Brothers Production</li>
              </>}
              <li>{copy?.premierePrefix ?? "Created"} <Link to={showTo} className="text-foreground underline underline-offset-4 hover:text-foreground/80">La Muerte del Ángel</Link>{copy?.premiereSuffix ?? ", their new production"}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-12">{copy?.regionsHeading ?? "Where They Have Performed"}</h2>
          <dl className="grid md:grid-cols-3 gap-8 md:gap-10">
            {pageRegions.map(region => (
              <div key={region.name} className="border-t border-primary/40 pt-6 min-w-0">
                <dt className="font-serif text-3xl mb-4">{region.name}</dt>
                <dd className="text-base md:text-lg leading-relaxed text-foreground/85">{copy ? `${region.countries.slice(0, -1).join(', ')} ${lang === 'fr' ? 'et' : region.name === 'Europa' ? 'e' : 'y'} ${region.countries.at(-1)}` : region.countries.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="px-6 pb-16 md:pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <Button asChild className="h-auto px-8 py-4 text-sm tracking-[0.1em]"><Link to={showTo}>{copy?.showCta ?? "Discover the show"}</Link></Button>
          <p className="mt-6 text-sm text-muted-foreground">{lang === "fr" ? "Diffusion :" : `${bookingLabel[lang]}:`} <a href="mailto:luizagabros@gmail.com" className="text-foreground underline underline-offset-4 hover:text-foreground/80">luizagabros@gmail.com</a></p>
        </div>
      </section>
    </>
  );
}
