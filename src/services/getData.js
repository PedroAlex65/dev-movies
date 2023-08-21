import api from "./api";

export async function getMovies() {
  const {
    data: { results },
  } = await api.get("/movie/popular");
  return results;
}
export async function getTopMovies() {
  const {
    data: { results },
  } = await api.get("/movie/top_rated");
  return results;
}
export async function getTopSeries() {
  const {
    data: { results },
  } = await api.get("/tv/top_rated");
  return results;
}
export async function getPopular() {
  const {
    data: { results },
  } = await api.get("/tv/popular");
  return results;
}
export async function peopleList() {
  const {
    data: { results },
  } = await api.get("/person/popular");
  return results;
}

export async function getMovieVideos(movieID) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieID}/videos`);

  return results;
}

export async function getMovieCredits(movieID) {
  const {
    data: { cast },
  } = await api.get(`/movie/${movieID}/credits`);

  return cast;
}

export async function getMovieSimilar(movieID) {
  const {
    data: { results },
  } = await api.get(`/movie/${movieID}/similar`);

  return results;
}

export async function getMovieById(movieID) {
  const { data } = await api.get(`/movie/${movieID}`);

  return data;
}
