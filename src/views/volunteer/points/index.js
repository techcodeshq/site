import React from "react";
import { SectionWrapper, StyledTitle, GridWrap, ListTitle } from "./style";
import { Container, NormalText } from "@styles";
import ReactMarkdown from "react-markdown";

const Points = ({ data }) => {
  return (
    <SectionWrapper>
      <Container>
        <StyledTitle>Why volunteer?</StyledTitle>
        <ReactMarkdown components={{ p: NormalText }}>{data.volunteer_description}</ReactMarkdown>
        <GridWrap>
          {data.volunteer_card.map((info, index) => (
            <div key={index}>
              <ListTitle>{info.title}</ListTitle>
              <NormalText>{info.description}</NormalText>
            </div>
          ))}
        </GridWrap>
      </Container>
    </SectionWrapper>
  );
};

export default Points;
