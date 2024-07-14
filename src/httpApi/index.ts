import axios from "axios";

export const httpScryfall = axios.create({
  baseURL: "https://api.scryfall.com/cards/",
});
