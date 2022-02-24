import React, { useEffect, useRef } from "react";
import { Container, NormalText } from "@styles";
import { LargeTitle, SectionWrapper, DescriptionWrapper, ImageWrapper, HeroImage } from "./style";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Button } from "@components";

gsap.registerPlugin(ScrollTrigger);

const Top = ({ title, description, image, link, linkText }) => {
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
    <SectionWrapper ref={el => (sectionContainer = el)}>
      <Container>
        <LargeTitle>{title}</LargeTitle>
        <DescriptionWrapper>
          <NormalText>{description}</NormalText>
        </DescriptionWrapper>
      </Container>
      {link && (
        <Button href={link} style={{ marginBottom: "10vw" }}>
          {linkText}
        </Button>
      )}
      <ImageWrapper link={link} ref={el => (heroImage = el)}>
        <HeroImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          alt={image.alternativeText && image.alternativeText}
        />
      </ImageWrapper>
    </SectionWrapper>
  );
};

export default Top;
