import { createStore } from "vuex";
import * as homeImagesMutations from "./modules/homeImages/mutations";
import * as homeImagesActions from "./modules/homeImages/actions";
import * as favoritesMutations from "./modules/favorites/mutations";
import * as favoritesActions from "./modules/favorites/actions";

const homeImages = {
  images: [],
};
const store = createStore({
  modules: {
    homeImages: {
      state: () => homeImages,
      mutations: homeImagesMutations,
      actions: homeImagesActions,
    },
    favorites: {
      state: () => [],
      mutations: favoritesMutations,
      actions: favoritesActions,
    },
  },
});

export default store;
