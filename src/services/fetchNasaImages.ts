import axios from "axios";

export const fetchNasaImages = (count: number) => {
  return axios.get("https://api.nasa.gov/planetary/apod", {
    params: {
      api_key: import.meta.env.VITE_NASA_API_KEY,
      count,
    },
  });
};
