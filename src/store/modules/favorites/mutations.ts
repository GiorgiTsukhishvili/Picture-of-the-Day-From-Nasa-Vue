import type { NasaImagesTypes } from "@/types";

export const loadFavorites = (
  state: NasaImagesTypes[],
  images: NasaImagesTypes[]
) => {
  state = images;
};

export const addInFavorites = (
  state: NasaImagesTypes[],
  image: NasaImagesTypes
) => {
  state.unshift(image);
};

export const removeFromFavorites = (
  state: NasaImagesTypes[],
  title: string
) => {
  state = state.filter((el) => el.title !== title);
};
