import { getImages } from "../../services/utils/getImages";
import { Container, Title } from "./style";

function Credits({ credits }) {
  console.log({ credits });
  return (
    <>
      <Title>Créditos</Title>

      {credits && <Container>
        {credits.slice(0, 5).map(artist => (
          <div key={artist.id}>
            <img src={getImages(artist.profile_path)} alt="" />
            <p>{artist.original_name}</p>
          </div>
        ))}
        </Container>}
    </>
  );
}

export default Credits;
