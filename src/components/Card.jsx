import React from "react";

const Card = (props) => {
  return (
    <a href="/deals" className="card__item">
      <img src={props.img} alt="" className="card__img" />
      <span className="card__title">{props.title}</span>
    </a>
  );
};

export default Card;
