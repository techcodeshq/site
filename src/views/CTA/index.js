import React from "react";
import { Button } from "@components";
import { Container, BigText } from "@styles";
import { CTAWrap, Line, TextWrapper, Card } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";

const CTA = ({ data }) => {
  return (
    <CTAWrap>
      <Container>
        <Line />
        <TextWrapper>
          <BigText>
            Empower students <span className="purple">around the nation</span> with STEM
            opportunities
          </BigText>
          <Button to="/partner">Become a partner</Button>
        </TextWrapper>
      </Container>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={50}
        grabCursor={true}
        breakpoints={{ 860: { slidesPerView: 4.5 }, 600: { slidesPerView: 3.5 } }}>
        {data.CTA.logos.map((info, index) => (
          <SwiperSlide key={index}>
            <Card>
              <img src={info.localFile.url} alt="Sponsor" />
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </CTAWrap>
  );
};

export default CTA;
