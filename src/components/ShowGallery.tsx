import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { images } from '@/data/images';

import { mediaCopy, type Lang } from "@/lib/i18n";

const AUTOPLAY_MS = 4500;

const gallery = [
  { ...images['gallery-1'], alt: 'A tango couple embraces with the live band behind them' },
  { ...images['gallery-2'], alt: 'The ensemble dances beneath pink stage lights' },
  { ...images['gallery-3'], alt: 'Two couples perform tango on stage' },
  { ...images['gallery-4'], alt: 'A tango couple in a sweeping embrace' },
  { ...images['gallery-5'], alt: 'Aerial straps rise above the dancers' },
  { ...images['gallery-6'], alt: 'A dancer lifts his partner in the spotlight' },
  { ...images['gallery-7'], alt: 'The ensemble in a dramatic blue and pink stage scene' },
  { ...images['gallery-8'], alt: 'Two characters wearing hats against a red theatre curtain' },
  { ...images['gallery-9'], alt: 'An aerial performer suspended over the ensemble' },
];

export function ShowGallery({ lang = "en" }: { lang?: Lang }) {
  const copy = mediaCopy[lang];
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? undefined : gallery[selected];
  const move = (direction: number) => setSelected(current => current === null ? null : (current + direction + gallery.length) % gallery.length);

  const reducedMotion = useReducedMotion();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const paused = useRef(false);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on('select', onSelect);
    return () => { api.off('select', onSelect); };
  }, [api]);

  useEffect(() => {
    if (!api || reducedMotion) return;
    const id = setInterval(() => {
      if (paused.current) return;
      api.scrollNext();
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [api, reducedMotion]);

  const pause = useCallback(() => { paused.current = true; }, []);
  const resume = useCallback(() => { paused.current = false; }, []);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
      event.preventDefault();
      const direction = event.key === 'ArrowLeft' ? -1 : 1;
      setSelected(current => current === null ? null : (current + direction + gallery.length) % gallery.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <>
      <div
        className="group/carousel relative mb-10 md:mb-14"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
      >
        <Carousel setApi={setApi} opts={{ loop: true }} className="overflow-hidden rounded-sm border border-border/60 shadow-deep">
          <CarouselContent className="-ml-0">
            {gallery.map((image, index) => (
              <CarouselItem key={image.url} className="pl-0">
                <Button
                  variant="ghost"
                  className="relative h-auto w-full rounded-none p-0 bg-card overflow-hidden aspect-[16/10] md:aspect-[21/9]"
                  aria-label={`${copy.enlarge} ${index + 1}`}
                  onClick={() => setSelected(index)}
                >
                  <img
                    src={image.url} width={image.width} height={image.height}
                    alt={copy.alts[index]}
                    loading={index === 0 ? "eager" : undefined}
                    fetchPriority={index === 0 ? "high" : undefined}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                </Button>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <button
          type="button"
          aria-label={copy.previous}
          onClick={() => api?.scrollPrev()}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-background/60 text-foreground opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 focus-visible:opacity-100 transition-opacity backdrop-blur-sm"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label={copy.next}
          onClick={() => api?.scrollNext()}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-background/60 text-foreground opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 focus-visible:opacity-100 transition-opacity backdrop-blur-sm"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
          {gallery.map((image, index) => (
            <button
              key={image.url}
              type="button"
              aria-label={`${copy.gallery} ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={`h-1.5 rounded-full transition-all ${index === current ? "w-6 bg-primary" : "w-1.5 bg-foreground/35 hover:bg-foreground/60"}`}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {gallery.map((image, index) => (
          <Button key={image.url} variant="ghost" className="h-auto w-full rounded-none p-0 bg-background overflow-hidden" aria-label={`${copy.enlarge} ${index + 1}`} onClick={() => setSelected(index)}>
            <img src={image.url} width={image.width} height={image.height} alt={copy.alts[index]} loading="lazy" className="block w-full h-auto" />
          </Button>
        ))}
      </div>
      <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
        <DialogContent closeLabel={copy.close} aria-describedby={undefined} className="w-[calc(100%-2rem)] max-w-6xl max-h-[90dvh] gap-3 p-3 pt-12 bg-background">
          <DialogTitle className="sr-only">{copy.gallery} {selected === null ? '' : selected + 1}</DialogTitle>
          {active && <img src={active.url} width={active.width} height={active.height} alt={selected === null ? "" : copy.alts[selected]} className="block w-full h-auto max-h-[calc(90dvh-8rem)] object-contain" />}
          <div className="flex items-center justify-center gap-6">
            <Button variant="outline" size="icon" onClick={() => move(-1)} aria-label={copy.previous} title={lang !== "en" ? copy.previous : "Previous photo"}><ChevronLeft /></Button>
            <span className="text-sm text-muted-foreground">{selected === null ? '' : selected + 1} / {gallery.length}</span>
            <Button variant="outline" size="icon" onClick={() => move(1)} aria-label={copy.next} title={lang !== "en" ? copy.next : "Next photo"}><ChevronRight /></Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}