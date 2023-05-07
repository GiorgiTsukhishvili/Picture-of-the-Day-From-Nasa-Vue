import { createStore } from "vuex";
import * as homeImagesMutations from "./modules/homeImages/mutations";

const homeImages = {
  images: [],
};

const store = createStore({
  modules: {
    homeImages: {
      state: () => homeImages,
      mutations: homeImagesMutations,
    },
  },
});

export default store;
