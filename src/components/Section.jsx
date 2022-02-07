import React from "react";

const Section = (props) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">{props.title}</h2>
        <div className="card__inner">{props.children}</div>
      </div>
    </section>
  );
};

export default Section;
