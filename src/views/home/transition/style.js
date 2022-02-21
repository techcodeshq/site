import styled from "styled-components";
import { media } from "@styles";

export const TransitionWrapper = styled.section`
  position: relative;
  width: 100vw;
  height: 90vh;
  margin-top: 5vw;
  overflow: hidden;

  ${media.thone`
    height: 90vh;
    margin-top: 10vw;
  `};

  a {
    font-size: 1.5vw;
    font-weight: 600;

    ${media.tablet`
      font-size: 2vw;
      padding: 1vw 4vw;
    `};
    ${media.thone`font-size: 4vw;`};
  }
`;
export const ImageWrap = styled.div`
  img,
  .gatsby-image-wrapper {
    height: 100%;
    z-index: 1;
  }

  div {
    position: absolute;
    inset: -5%;
  }
`;
export const OverLay = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(238, 238, 238, 0.7);
`;
export const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
