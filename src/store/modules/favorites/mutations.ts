import type { NasaImagesTypes } from "@/types";

export const loadFavorites = (
  state: { images: NasaImagesTypes[] },
  images: NasaImagesTypes[]
) => {
  state.images = images;
};

export const addInFavorites = (
  state: { images: NasaImagesTypes[] },
  image: NasaImagesTypes
) => {
  state.images.unshift(image);
};

export const removeFromFavorites = (
  state: { images: NasaImagesTypes[] },
  title: string
) => {
  state.images = [...state.images.filter((el) => el.title !== title)];
};
