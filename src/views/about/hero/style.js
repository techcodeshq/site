import styled from "styled-components";
import { media, NormalText, TitleText } from "@styles";

export const SectionWrapper = styled.div`
  background-color: var(--foreground);
  padding: 10rem 0;

  ${media.tablet`padding-top: 14rem;`};
`;
export const GridWrapper = styled.div`
  display: flex;

  ${media.thone`flex-direction: column;`};
`;
export const LeftCol = styled.div`
  padding: 10vw 0;
`;
export const RightCol = styled.div`
  max-width: 40%;
  margin-left: auto;

  ${media.thone`max-width: 100%;`};
`;
export const LargeTitle = styled(TitleText)`
  color: var(--deepBlue);

  ${media.thone`margin: 0;`};
`;
export const Subtitle = styled(NormalText)`
  font-weight: 500;
`;
const ImageBase = styled.div`
  width: 45%;
  height: 35vw;
  border-radius: 55px;
  ${media.thone`
    height: 55vw;
  `};

  img,
  .gatsby-image-wrapper {
    border-radius: inherit;
    height: 100%;
  }
`;
export const ImageOne = styled(ImageBase)`
  width: 50%;
  transform: rotate(4deg);
  z-index: 2;
  position: relative;
`;
export const ImageTwo = styled(ImageBase)`
  transform: rotate(-4deg);
  z-index: 1;
  margin-left: 45%;
  margin-top: -80%;
`;
