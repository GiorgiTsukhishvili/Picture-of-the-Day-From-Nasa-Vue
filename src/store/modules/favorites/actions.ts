import type { NasaImagesTypes } from "@/types";
import type { Commit } from "vuex";

const favorites = localStorage.getItem("favorites");

export const loadFavoriteImages = ({ commit }: { commit: Commit }) => {
  commit("loadFavorites", favorites ? JSON.parse(favorites) : []);
};

export const addFavoriteImage = (
  { commit }: { commit: Commit },
  payload: NasaImagesTypes
) => {
  commit("addInFavorites", payload);
};

export const removeFavoriteImage = (
  { commit }: { commit: Commit },
  payload: string
) => {
  commit("removeFromFavorites", payload);
};
