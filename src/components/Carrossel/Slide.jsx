import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slide = () => {
  const settings = {
    dots: true, // Mostrar os pontos de navegação
    infinite: true, // Navegação infinita
    speed: 500, // Velocidade da animação (em milissegundos)
    slidesToShow: 3, // Número de slides visíveis ao mesmo tempo
    slidesToScroll: 1, // Número de slides a serem percorridos
    autoplay: true, // Reprodução automática
    autoplaySpeed: 2000, // Intervalo de tempo entre os slides (em milissegundos)
  };
  return <Slider {...settings}></Slider>;
};

export default Slide;
