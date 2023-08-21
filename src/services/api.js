import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "23e872cf6ab8ef9996ca8d24d19b7a82",
    language: "pt-BR",
    page: 1,
  },
});

export default api;
