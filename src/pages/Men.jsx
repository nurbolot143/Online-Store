import React from "react";
import Intro from "../components/Intro";
import cardList from "../cardList";
import Section from "../components/Section";
import Card from "../components/Card";

const Men = () => {
  return (
    <div className="men">
      <Intro />
      <Section title="BIGGEST DEALS ON TOP BRANDS">
        {cardList.map((e) => {
          return <Card key={e.id} img={e.download_url} />;
        })}
      </Section>
      <Section title="Categeries to bag">
        {cardList.map((e) => {
          return <Card key={e.id} img={e.download_url} />;
        })}
      </Section>
      <Section title="EXPLORE TOP BRANDS">
        {cardList.map((e) => {
          return <Card key={e.id} img={e.download_url} />;
        })}
      </Section>
    </div>
  );
};

export default Men;
