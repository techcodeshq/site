import React, { useEffect, useRef } from "react";
import { Container, TitleText } from "@styles";
import { HeroWrapper, ImageWrapper, HeroImage } from "./style";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ data }) => {
  let heroImage = useRef(null);
  let sectionContainer = useRef(null);

  useEffect(() => {
    const br = gsap
      .timeline({ defaults: { ease: "none" } })
      .to(heroImage, { borderRadius: 75, width: "92.8%" });

    ScrollTrigger.create({
      trigger: sectionContainer,
      scroller: "#___gatsby",
      animation: br,
      start: "top+=50% center",
      end: "bottom-=5% center",
      scrub: true,
    });

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <HeroWrapper ref={el => (sectionContainer = el)}>
      <Container>
        <TitleText>{data.hero_title}</TitleText>
      </Container>
      <ImageWrapper ref={el => (heroImage = el)}>
        <HeroImage
          image={data.hero_image.localFile.childImageSharp.gatsbyImageData}
          alt="TechCodes hero event"
        />
      </ImageWrapper>
    </HeroWrapper>
  );
};

export default Hero;
