import React, { useEffect, useRef } from "react";
import { Container, NormalText } from "@styles";
import { InfoSection, Card, CardGrid, CardTitle } from "./style";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ReactMarkdown from "react-markdown";

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
            <ReactMarkdown components={{ p: NormalText }}>{data.do_text}</ReactMarkdown>
          </Card>
          <Card>
            <CardTitle red>Our approach</CardTitle>
            <ReactMarkdown components={{ p: NormalText }}>{data.approach_text}</ReactMarkdown>
          </Card>
        </CardGrid>
      </Container>
    </InfoSection>
  );
};

export default Info;
