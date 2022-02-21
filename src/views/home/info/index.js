import React from "react";
import { Container, Label, NormalText } from "@styles";
import { InfoWrapper, TitleText, TopTextWrap, CardGridWrap, Card, Number } from "./style";
import { GridContainer, LeftCol, RightCol, AboutText } from "../about/style";
import ReactMarkdown from "react-markdown";

const Info = ({ data }) => {
  return (
    <InfoWrapper>
      <Container>
        <GridContainer>
          <LeftCol>
            <Label>What we do</Label>
          </LeftCol>
          <RightCol>
            <TopTextWrap>
              <AboutText>
                We're impacting students <span className="green">everyday</span>
              </AboutText>
              <ReactMarkdown components={{ p: NormalText }}>{data.info_description}</ReactMarkdown>
            </TopTextWrap>
          </RightCol>
        </GridContainer>
        <CardGridWrap>
          {data.info_cards.map((info, index) => (
            <Card key={index}>
              <div>
                <Number>{index + 1}</Number>
              </div>
              <div>
                <TitleText>{info.info_title}</TitleText>
                <NormalText>{info.info_description}</NormalText>
              </div>
            </Card>
          ))}
        </CardGridWrap>
      </Container>
    </InfoWrapper>
  );
};

export default Info;
