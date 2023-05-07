import type { NasaImagesTypes } from "@/types";

export const addImagesInStore = (
  state: { images: NasaImagesTypes[] },
  images: NasaImagesTypes[]
) => {
  state.images = images;
};
