import React from "react";
import introList from "../introList";
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
    autoplaySpeed: 6000,
    cssEase: "linear",
  };
  return (
    <section className="intro">
      <Slider {...sliderSettings}>
        {introList.map((el) => {
          return (
            <Link to="/" className="intro__link" key={el.id}>
              <img src={el.download_url} alt="" />
            </Link>
          );
        })}
      </Slider>
    </section>
  );
};

export default Intro;
