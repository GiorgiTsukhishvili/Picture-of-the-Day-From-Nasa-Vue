import type { NasaImagesTypes } from "@/types";

export const addImagesInStore = (
  state: { images: NasaImagesTypes[] },
  images: NasaImagesTypes[]
) => {
  state.images = images;
};

export const loadMoreImagesInStore = (
  state: { images: NasaImagesTypes[] },
  images: NasaImagesTypes[]
) => {
  state.images = [...images, ...state.images];
};
