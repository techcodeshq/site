import React from "react";
import {
  SupportSection,
  DescriptionWrapper,
  SupportTitle,
  SlideItem,
  CardTitle,
  CardText,
} from "./style";
import { Container, Label, NormalText, MidText } from "@styles";
import { Swiper, SwiperSlide } from "swiper/react";
import ReactMarkdown from "react-markdown";

const Support = ({ data }) => {
  return (
    <SupportSection>
      <Container>
        <Label>Support us</Label>
        <SupportTitle>
          TechCodes relies on <i>your</i> support
        </SupportTitle>
        <DescriptionWrapper>
          <ReactMarkdown components={{ p: NormalText }}>{data.support_description}</ReactMarkdown>
        </DescriptionWrapper>
      </Container>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={30}
        grabCursor={true}
        breakpoints={{ 600: { slidesPerView: 2.5 } }}>
        {data.support_cards.map((info, index) => (
          <SwiperSlide key={index}>
            <SlideItem>
              <MidText style={{ margin: 0 }}>0{index + 1}.</MidText>
              <div>
                <CardTitle index={index + 1}>{info.support_title}</CardTitle>
                <CardText>{info.support_description}</CardText>
              </div>
            </SlideItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </SupportSection>
  );
};

export default Support;
