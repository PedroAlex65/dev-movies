import { useEffect, useState } from "react";
import {
  Container,
  Background,
  Cover,
  Info,
  ContainerMovies,
} from "../Detail/style";
import {
  getMovieById,
  getMovieCredits,
  getMovieSimilar,
  getMovieVideos,
} from "../../services/getData";
import { useParams } from "react-router-dom";
import { getImages } from "../../services/utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import Slide from "../../components/Slide";

function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState();
  const [movieVideos, setMovieVideos] = useState();
  const [movieCredits, setMovieCredits] = useState();
  const [movieSimilar, setMovieSimilar] = useState();

  useEffect(() => {
    async function getAllData() {
      console.time("time");
      Promise.all([
        getMovieById(id),
        getMovieVideos(id),
        getMovieCredits(id),
        getMovieSimilar(id),
      ])
        .then(([movie, videos, credits, similar]) => {
          console.log({ movie, videos, credits, similar });
          setMovie(movie);
          setMovieVideos(videos);
          setMovieCredits(credits);
          setMovieSimilar(similar);
        })
        .catch((error) => console.error(error));

      console.timeEnd("time");
    }

    getAllData();
  }, []);

  return (
    <>
      {movie && (
        <>
          <Background image={getImages(movie.backdrop_path)} />
          <Container>
            <Cover>
              <img src={getImages(movie.poster_path)} />
            </Cover>

            <Info>
              <h2>{movie.title}</h2>
              <SpanGenres genres={movie.genres} />
              <p>{movie.overview}</p>
              <div>
                <Credits credits={movieCredits} />
              </div>
            </Info>
          </Container>
          <ContainerMovies>
            {movieVideos &&
              movieVideos.map((video) => (
                <div key={video.id}>
                  <h2>{video.name}</h2>
                  <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    title="Youtube Video Player"
                    height="500px"
                    width="100%"
                  ></iframe>{" "}
                </div>
              ))}
          </ContainerMovies>

          {movieSimilar && <Slide info={movieSimilar} title="Filmes Similares" />}
        </>
      )}
    </>
  );
}

export default Detail;
