import React from "react";
import { Hero, Info, Team } from "@views/about";

const About = ({ data }) => {
  return (
    <>
      <Hero />
      <Info />
      <Team />
    </>
  );
};

export default About;
