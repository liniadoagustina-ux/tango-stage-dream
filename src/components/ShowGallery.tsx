import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { images } from '@/data/images';

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

export function ShowGallery() {
  const [selected, setSelected] = useState<number | null>(null);
  const active = selected === null ? undefined : gallery[selected];
  const move = (direction: number) => setSelected(current => current === null ? null : (current + direction + gallery.length) % gallery.length);

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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
        {gallery.map((image, index) => (
          <Button key={image.url} variant="ghost" className="h-auto w-full rounded-none p-0 bg-background overflow-hidden" aria-label={`Enlarge gallery photo ${index + 1}`} onClick={() => setSelected(index)}>
            <img src={image.url} width={image.width} height={image.height} alt={image.alt} loading="lazy" className="block w-full h-auto" />
          </Button>
        ))}
      </div>
      <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null); }}>
        <DialogContent aria-describedby={undefined} className="w-[calc(100%-2rem)] max-w-6xl max-h-[90dvh] gap-3 p-3 pt-12 bg-background">
          <DialogTitle className="sr-only">Tango – La Muerte del Ángel gallery, photo {selected === null ? '' : selected + 1}</DialogTitle>
          {active && <img src={active.url} width={active.width} height={active.height} alt={active.alt} className="block w-full h-auto max-h-[calc(90dvh-8rem)] object-contain" />}
          <div className="flex items-center justify-center gap-6">
            <Button variant="outline" size="icon" onClick={() => move(-1)} aria-label="Previous gallery photo" title="Previous photo"><ChevronLeft /></Button>
            <span className="text-sm text-muted-foreground">{selected === null ? '' : selected + 1} / {gallery.length}</span>
            <Button variant="outline" size="icon" onClick={() => move(1)} aria-label="Next gallery photo" title="Next photo"><ChevronRight /></Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}