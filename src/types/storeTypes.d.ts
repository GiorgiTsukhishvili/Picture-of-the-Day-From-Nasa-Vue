import type { NasaImagesTypes } from "@/types";

export type StoreType = {
  favorites: { images: NasaImagesTypes[] };
  homeImages: { images: NasaImagesTypes[] };
};
