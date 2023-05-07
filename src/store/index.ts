import { createStore } from "vuex";
import * as homeImagesMutations from "./modules/homeImages/mutations";
import * as homeImagesActions from "./modules/homeImages/actions";

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
  },
});

export default store;
