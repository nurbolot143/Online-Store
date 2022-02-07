import React from "react";
import tShirt from "../assets/img/t-shirt.jpg";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Intro = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 10000,
    cssEase: "linear",
  };

  const SliderCard = (props) => {
    return (
      <Link to="/" className="intro__link">
        <img src={props.img} alt="" />
      </Link>
    );
  };

  return (
    <section className="intro">
      <Slider {...sliderSettings}>
        <SliderCard img={tShirt} />
        <SliderCard img={tShirt} />
        <SliderCard img={tShirt} />
      </Slider>
    </section>
  );
};

export default Intro;
