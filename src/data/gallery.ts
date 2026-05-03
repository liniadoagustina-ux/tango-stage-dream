import heroAerial from "@/assets/gallery/hero-aerial.jpg";
import tangoEmbrace from "@/assets/gallery/tango-embrace.jpg";
import aerialSilk from "@/assets/gallery/aerial-silk.jpg";
import legs from "@/assets/gallery/legs.jpg";
import bandoneon from "@/assets/gallery/bandoneon.jpg";
import ensemble from "@/assets/gallery/ensemble.jpg";
import spin from "@/assets/gallery/spin.jpg";

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "tall" | "wide" | "square";
};

export const gallery: GalleryImage[] = [
  { src: heroAerial, alt: "Aerial straps performance with ensemble on stage", span: "wide" },
  { src: tangoEmbrace, alt: "Tango embrace under a single red spotlight", span: "tall" },
  { src: aerialSilk, alt: "Aerial silk performer above the stage" },
  { src: legs, alt: "Tango heels mid-step in red light" },
  { src: bandoneon, alt: "Silhouette of a bandoneón player" , span: "tall"},
  { src: ensemble, alt: "Ensemble of tango dancers in red light", span: "wide" },
  { src: spin, alt: "Dancer spinning in a red dress" },
];

export { heroAerial };
