import React, { useEffect, useRef } from "react";
import { Container, NormalText } from "@styles";
import { InfoSection, Card, CardGrid, CardTitle } from "./style";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Info = ({ data }) => {
  let parallaxContainer = useRef(null);

  useEffect(() => {
    const uncover = gsap
      .timeline({ defaults: { ease: "none" } })
      .from(parallaxContainer, { yPercent: -50 });

    ScrollTrigger.create({
      trigger: parallaxContainer,
      scroller: "#___gatsby",
      animation: uncover,
      start: "top+=25% bottom",
      end: "bottom+=55% bottom",
      scrub: true,
    });

    ScrollTrigger.addEventListener("refresh", () => window.scroll.update());
    ScrollTrigger.refresh();
  }, []);

  return (
    <InfoSection>
      <Container ref={el => (parallaxContainer = el)}>
        <CardGrid>
          <Card>
            <CardTitle>
              What <br />
              we do
            </CardTitle>
            <NormalText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </NormalText>
          </Card>
          <Card>
            <CardTitle red>Our approach</CardTitle>
            <NormalText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </NormalText>
          </Card>
        </CardGrid>
      </Container>
    </InfoSection>
  );
};

export default Info;
