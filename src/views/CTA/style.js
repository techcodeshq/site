import styled from "styled-components";
import { media } from "@styles";

export const CTAWrap = styled.section`
  margin-top: 10vw;
  padding-bottom: 10vw;

  .swiper {
    width: 100%;
    padding-left: 7vw;
    margin-top: 4vw;

    ${media.thone`margin-top: 14vw;`};
  }

  ${media.thone`padding-bottom: 18vw;`};
`;
export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: var(--gray);
`;
export const TextWrapper = styled.div`
  width: 100%;
  padding-top: 6vw;
  max-width: 60%;

  a {
    font-size: 1vw;
    font-weight: 600;
    padding: 0.4vw 1.2vw;

    ${media.tablet`
      font-size: 2vw;
      padding: 1vw 2vw;
    `};
    ${media.thone`
      font-size: 3vw;
      padding: 1.4vw 4vw;
    `};
    ${media.phone`font-size: 3.5vw;`};
  }

  ${media.thone`max-width: 100%;`};
`;
export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 38px;
  background-color: var(--accent);
  height: 10vw;

  ${media.thone`
    width: 35vw;
    height: 15vw;
  `};

  img {
    width: 10vw;

    ${media.tablet`width: 20vw;`};
    ${media.thone`width: 30vw;`};
  }
`;
