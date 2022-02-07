import React from "react";
import Intro from "../components/Intro";
import cardList from "../cardList";
import Section from "../components/Section";
import Card from "../components/Card";

const Kids = () => {
  return (
    <div className="kids">
      <Intro />
      <Section title="FASHION & ESSENTIALS">
        {cardList.map((e) => {
          return <Card key={e.id} img={e.download_url} />;
        })}
      </Section>
      <Section title="EXPLORE MORE">
        {cardList.map((e) => {
          return <Card key={e.id} img={e.download_url} />;
        })}
      </Section>
      <Section title="THE KIDS SPACE">
        {cardList.map((e) => {
          return <Card key={e.id} img={e.download_url} />;
        })}
      </Section>
    </div>
  );
};

export default Kids;
