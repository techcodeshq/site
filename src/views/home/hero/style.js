import styled from "styled-components";
import { media } from "@styles";
import { GatsbyImage } from "gatsby-plugin-image";

export const HeroWrapper = styled.section`
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  ${media.thone`
    h1 {
      text-align: left;
    }
  `};
`;
export const ImageWrapper = styled.div`
  width: 100vw;

  ${media.thone`height: 70vh;`};
`;
export const HeroImage = styled(GatsbyImage)`
  border-radius: inherit;
  width: 100%;
  height: 100%;
`;
