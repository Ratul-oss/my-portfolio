import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "./SliderItem";
import SliderData from "./SliderData";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section id="Slider">
        <Slider {...settings} id="mainSlider">
          {SliderData.map((data, index) => {
            return (
              <SliderItem
                key={index}
                title={data.title}
                desc={data.desc}
                background={data.background}
              />
            );
          })}
        </Slider>
      </section>
    </>
  );
};

export default SliderComponent;
