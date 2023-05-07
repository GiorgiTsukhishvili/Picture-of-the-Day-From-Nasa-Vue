import type { NasaImagesTypes } from "@/types";
import type { Commit } from "vuex";

export const addHomeImages = (
  { commit }: { commit: Commit },
  payload: NasaImagesTypes[]
) => {
  commit("addImagesInStore", payload);
};
