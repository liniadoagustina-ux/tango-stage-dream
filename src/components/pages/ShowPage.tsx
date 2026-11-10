import { Trailer } from "@/components/Trailer";
import { ShowGallery } from "@/components/ShowGallery";
import { SectionHeading } from "@/components/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";
import { images } from "@/data/images";
import { characters, credits } from "@/data/show";
import { showCopyEs, showCopyFr, bookingLabel, type Lang } from "@/lib/i18n";
const showLogoAsset = images["la-muerte-del-angel-137"];

export function ShowPage({ lang = "en" }: { lang?: Lang }) {
  const copy = lang === "fr" ? showCopyFr : lang === "es" ? showCopyEs : undefined;
  const pageCharacters = copy?.characters ?? characters;
  const pageCredits = copy?.credits ?? credits;
  const reducedMotion = useReducedMotion();
  return (
    <>
      <section className="relative w-full overflow-hidden vignette bg-background">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reducedMotion ? 0 : 0.4 }} className="relative z-10">
          <figure className="relative block w-full overflow-hidden shadow-deep ring-1 ring-primary/40">
            <img src={showLogoAsset.url} width={showLogoAsset.width} height={showLogoAsset.height} alt="La Muerte del Ángel — Luizaga Brothers" fetchPriority="high" className="block w-full h-auto" />
            <div className="pointer-events-none absolute inset-0 hidden md:block bg-gradient-to-t from-background via-background/30 to-transparent" />
            <figcaption className="relative px-6 pt-6 pb-10 md:absolute md:inset-x-0 md:bottom-0 md:p-10">
              <span className="block h-px w-16 bg-primary mb-4" />
              <h1 className="font-serif text-foreground leading-none text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-balance drop-shadow-lg">La Muerte del Ángel</h1>
              <p className="mt-3 text-base md:text-lg text-foreground/90">{copy?.line ?? "In Buenos Aires, death dances to the rhythm of tango."}</p>
            </figcaption>
          </figure>
        </motion.div>
      </section>

      {copy && <section className="py-12 md:py-20 px-6 bg-background surface-2">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>{copy.workHeading}</SectionHeading>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{copy.work}</p>
        </div>
      </section>}

      <section className="py-12 md:py-20 px-6 bg-background surface-1">
        <div className="max-w-4xl mx-auto">
          <SectionHeading>{copy?.storyHeading ?? "The Story"}</SectionHeading>
          <div className="space-y-6 text-base md:text-lg text-foreground/90 leading-relaxed">
            {copy ? copy.story.map(paragraph => <p key={paragraph}>{paragraph}</p>) : <>
            <p>In a timeless neighbourhood of Buenos Aires, Gabino and Amanda share a simple, lasting love, born in a milonga and sealed in the embrace.</p>
            <p>One stormy afternoon, in the middle of Gabino's birthday lunch, Charon, the ferryman of the dead, comes for Amanda. She doesn't resist. She dances with him.</p>
            <p>Only Nocturna, a medium who can see beyond this world, perceives his presence. Left behind, Gabino wanders through grief: the town fair, a mistaken kiss, nights with no way out. In the end he chooses to follow Amanda, and Charon guides them both across.</p>
            </>}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 bg-background surface-2">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>{copy?.charactersHeading ?? "Characters"}</SectionHeading>
          <dl className="grid grid-cols-2 md:grid-cols-3 gap-x-5 md:gap-x-10 gap-y-8 md:gap-y-12">
            {pageCharacters.map(character => (
              <div key={character.name} className="border-t border-primary/40 pt-5 min-w-0">
                <dt className="font-serif text-2xl md:text-3xl leading-tight text-foreground">{character.name}</dt>
                <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{character.performer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 bg-background surface-3">
        <div className="max-w-4xl mx-auto">
          <SectionHeading align="center">{copy?.trailerHeading ?? "Watch the Show"}</SectionHeading>
          <Trailer lang={lang} />
        </div>
      </section>

      <section className="py-12 md:py-20 px-6 bg-background surface-1">
        <div className="max-w-6xl mx-auto">
          <SectionHeading>{copy?.galleryHeading ?? "Gallery"}</SectionHeading>
          <ShowGallery lang={lang} />
        </div>
      </section>

      <section className="px-6 pt-12 pb-14 md:pt-20 md:pb-20 bg-background surface-2">
        <div className="max-w-4xl mx-auto border-t border-primary/40 pt-8">
          <h2 className="font-serif text-gold text-3xl mb-6">{copy?.creditsHeading ?? "Credits"}</h2>
          <dl className="space-y-3 text-base text-muted-foreground leading-relaxed">
            {pageCredits.map(credit => (
              <div key={credit.role}><dt className="inline text-foreground">{credit.role}{lang === "fr" ? "\u00a0: " : ": "}</dt><dd className="inline">{credit.name}</dd></div>
            ))}
          </dl>
          <p className="mt-12 text-base text-muted-foreground">{lang === "fr" ? "Diffusion :" : `${bookingLabel[lang]}:`} <a href="mailto:luizagabros@gmail.com" className="text-foreground underline underline-offset-4 hover:text-foreground/80">luizagabros@gmail.com</a></p>
        </div>
      </section>
    </>
  );
}
