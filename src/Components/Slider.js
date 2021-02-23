import React from "react";
import Slider from "react-slick";

const Slider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider {...settings}>
        <div>1</div>
        <div>2</div>
      </Slider>
    </>
  );
};

export default Slider;
