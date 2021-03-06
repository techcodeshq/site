import React, { useState, useEffect } from "react";
import { Container } from "@styles";
import { NewsBar, Description, CloseButton, ContentWrapper } from "./style";
import Icon from "../icon";

const News = () => {
  const [closed, setClosed] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (clicked) {
        localStorage.setItem("closed", true);
        setClosed(true);
      } else {
        setClosed(localStorage.getItem("closed"));
      }
    }
  }, [clicked]);

  return (
    <>
      {!closed && (
        <NewsBar>
          <Container>
            <ContentWrapper>
              <div />
              <Description>
                Join our official 2022 hackathon today:{" "}
                <a href="https://code.techcodes.org" target="_blank" rel="noopener noreferrer">
                  Code Overflow!
                </a>
              </Description>
              <CloseButton onClick={() => setClicked(true)}>
                <Icon name="close" />
              </CloseButton>
            </ContentWrapper>
          </Container>
        </NewsBar>
      )}
    </>
  );
};

export default News;
