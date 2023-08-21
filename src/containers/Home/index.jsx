import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { Background, Container, ContainerButton, Info, Poster } from "./styles";
import Button from "../../components/Button";
import Header from "../../components/Header";
import Slider from "../../components/Slide";
import { getImages } from "../../services/utils/getImages";
import Modal from "../../components/Modal";
import {
  getMovies,
  getPopular,
  getTopMovies,
  getTopSeries,
  peopleList,
} from "../../services/getData";

function Home() {
  const [movie, setMovie] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [topMovies, setTopMovies] = useState([]);
  const [topSeries, setTopSeries] = useState([]);
  const [popular, setPopular] = useState([]);
  const [people, setPeopleList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function getAllData() {
      console.time("time");
      Promise.all([
        getMovies(),
        getTopMovies(),
        getTopSeries(),
        getPopular(),
        peopleList(),
      ])
        .then(([movie, topMovies, topSeries, popularSeries, topPeople]) => {
          setMovie(movie);
          setTopMovies(topMovies);
          setTopSeries(topSeries);
          setPopular(popularSeries);
          setPeopleList(topPeople);
        })
        .catch((error) => console.error(error));

      console.timeEnd("time");
    }

    getAllData();
  }, []);

  return (
    <>
      <Header />
      {movie.length > 0 && (
        <>
          <Background img={getImages(movie[0].backdrop_path)}>
            {showModal && (
              <Modal movieID={movie[0].id} setShowModal={setShowModal} />
            )}

            <Container>
              <Info>
                <h1>{movie[0].title}</h1>
                <p>{movie[0].overview}</p>
                <ContainerButton>
                  <Button
                    red={true}
                    onClick={() => navigate(`/detalhe/${movie[0].id}`)}
                  >
                    Assista Agora
                  </Button>
                  <Button red={false} onClick={() => setShowModal(true)}>
                    Assista o Trailer
                  </Button>
                </ContainerButton>
              </Info>
              <Poster>
                <img
                  src={getImages(movie[0].poster_path)}
                  alt="capa-do-dilme"
                />
              </Poster>
            </Container>
          </Background>
          {topMovies && <Slider info={topMovies} title="Top Filmes" />}
          {topSeries && <Slider info={topSeries} title="Top Séries" />}
          {popular && <Slider info={popular} title="Séries Populares" />}
          {people && <Slider info={people} title="Principais Artistas" />}
        </>
      )}
    </>
  );
}

export default Home;
