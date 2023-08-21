import { Container, Li, Menu } from "./styles";
import { Link, useLocation } from "react-router-dom";
import Img from "../../assets/logo.png";
import { useState } from "react";
const Header = () => {
  const { pathname } = useLocation();

  const [changeBackground, setChangeBackground] = useState(false);


  window.onscroll = () => {
    if (window.pageYOffset > 100) {
      setChangeBackground(true);
    } else {
      setChangeBackground(false);
    }
  };

  return (
    <Container changeBackground={changeBackground}>
      <img src={Img} alt="Logo-dev-movie" />
      <Menu>
        <Li isActive={pathname === "/"}>
          <Link to="/">Home</Link>
        </Li>
        <Li isActive={pathname.includes("filmes")}>
          <Link to="/filmes">Filmes</Link>
        </Li>
        <Li isActive={pathname.includes("series")}>
          <Link to="/series">Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
};

export default Header;
