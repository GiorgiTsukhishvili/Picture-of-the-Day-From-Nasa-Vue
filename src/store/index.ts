import { Store, createStore } from "vuex";
import * as homeImagesMutations from "./modules/homeImages/mutations";
import * as homeImagesActions from "./modules/homeImages/actions";
import * as favoritesMutations from "./modules/favorites/mutations";
import * as favoritesActions from "./modules/favorites/actions";
import type { StoreType } from "@/types";

const homeImages = {
  images: [],
};

const favoriteImages = {
  images: [],
};
const store: Store<StoreType> = createStore({
  modules: {
    homeImages: {
      state: () => homeImages,
      mutations: homeImagesMutations,
      actions: homeImagesActions,
    },
    favorites: {
      state: () => favoriteImages,
      mutations: favoritesMutations,
      actions: favoritesActions,
    },
  },
});

store.subscribe(() => {
  localStorage.setItem(
    "favorites",
    JSON.stringify(store.state.favorites.images)
  );
});

export default store;
