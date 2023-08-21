import React from "react";
import { Component } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";

const index = ({ info, title }) => {
  return (
    <Component>
      <h2>{title}</h2>
      <Swiper
        grabCursor
        spaceBetween={10}
        slidesPerView={"auto"}
        className="swiper"
      >
        {info.map((item, index) => (
          <SwiperSlide key={index}>
            <Card item={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </Component>
  );
};

export default index;
