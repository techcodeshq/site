import React, { useEffect, useRef } from "react";
import { Container } from "@styles";
import { HeroWrapper, ImageWrapper, HeroImage, HeroTitleText } from "./style";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ data }) => {
  let heroImage = useRef(null);
  let sectionContainer = useRef(null);

  useEffect(() => {
    const br = gsap
      .timeline({ defaults: { ease: "none" } })
      .fromTo(heroImage, { borderRadius: 0, width: "100%" }, { borderRadius: 75, width: "92.8%" });

    ScrollTrigger.create({
      trigger: sectionContainer,
      scroller: "#___gatsby",
      animation: br,
      start: "top+=50% center",
      end: "bottom center",
      scrub: true,
    });

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <HeroWrapper ref={el => (sectionContainer = el)}>
      <Container>
        <HeroTitleText>{data.hero_title}</HeroTitleText>
      </Container>
      <ImageWrapper ref={el => (heroImage = el)}>
        <HeroImage
          image={data.hero_image.localFile.childImageSharp.gatsbyImageData}
          alt={data.hero_image.alternativeText !== undefined && data.hero_image.alternativeText}
        />
      </ImageWrapper>
    </HeroWrapper>
  );
};

export default Hero;
