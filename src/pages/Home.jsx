import React from "react";
import Card from "../components/Card";
import cardList from "../cardList";
import Section from "../components/Section";
import Intro from "../components/Intro";

const Home = () => {
  return (
    <div className="home">
      <Intro />
      <Section title="Deals of the day">
        {cardList.map((e) => {
          return <Card key={e.id} img={e.download_url} title={e.author} />;
        })}
      </Section>

      <Section title="Categeries to bag">
        {cardList.map((e) => {
          return <Card key={e.id} img={e.download_url} title={e.author} />;
        })}
      </Section>
    </div>
  );
};

export default Home;
