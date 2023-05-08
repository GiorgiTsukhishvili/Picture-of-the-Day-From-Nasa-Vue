import type { NasaImagesTypes } from "@/types";

export const loadFavorites = (
  state: { favoriteImages: NasaImagesTypes[] },
  images: NasaImagesTypes[]
) => {
  state.favoriteImages = images;
};

export const addInFavorites = (
  state: { favoriteImages: NasaImagesTypes[] },
  image: NasaImagesTypes
) => {
  state.favoriteImages.unshift(image);
};

export const removeFromFavorites = (
  state: { favoriteImages: NasaImagesTypes[] },
  title: string
) => {
  state.favoriteImages = state.favoriteImages.filter(
    (el) => el.title !== title
  );
};
