import React from "react";
import { Button } from "@components";
import { Container, NormalText } from "@styles";
import { GridWrap, SectionWrap, StyledTitle, DescriptionWrapper } from "./style";
import ReactMarkdown from "react-markdown";

const Info = ({ data }) => {
  return (
    <GridWrap>
      <Container>
        {data.info_section.map((info, index) => (
          <SectionWrap key={index}>
            <StyledTitle>{info.title}</StyledTitle>
            <DescriptionWrapper>
              <ReactMarkdown components={{ p: NormalText }}>{info.description}</ReactMarkdown>
            </DescriptionWrapper>
            <Button href={info.link}>Apply now</Button>
          </SectionWrap>
        ))}
      </Container>
    </GridWrap>
  );
};

export default Info;
