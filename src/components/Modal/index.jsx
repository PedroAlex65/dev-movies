import { useEffect, useState } from "react";
import { Container, Background, ToClose } from "./style";
import api from "../../services/api";
import { getMovieVideos } from "../../services/getData";

function Modal({ movieID, setShowModal }) {
  const [modal, setModal] = useState();
  useEffect(() => {
    async function getModal() {
      setModal(await getMovieVideos(movieID));
    }

    getModal();
  }, []);
  return (
    <Background onClick={() => setShowModal(false)}>
      {modal && (
        <Container>
          <ToClose onClick={() => setShowModal(false)}>X</ToClose>
          <iframe
            src={`https://www.youtube.com/embed/${modal.key}`}
            title="Youtube Video Player"
            height="500px"
            width="100%"
          >
            {movieID}
          </iframe>
        </Container>
      )}
    </Background>
  );
}

export default Modal;
