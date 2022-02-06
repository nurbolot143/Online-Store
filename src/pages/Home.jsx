import React from "react";
import tShirt from "../assets/img/t-shirt.jpg";

const Home = () => {
  return (
    <div className="home">
      <section className="intro">
        <a href="/intro" className="intor__link">
          <img src={tShirt} alt="" />
        </a>
      </section>
    </div>
  );
};

export default Home;
