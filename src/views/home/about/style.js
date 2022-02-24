import styled from "styled-components";
import { BigText, media } from "@styles";

export const AboutSection = styled.section`
  width: 100%;
  margin-top: 8vw;
`;
export const GridContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${media.thone`
    flex-direction: column;
  `};
`;
export const LeftCol = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
`;
export const RightCol = styled.div`
  max-width: 60vw;

  ${media.thone`max-width: 100%;`};
`;
export const AboutText = styled(BigText)`
  margin: 0;

  ${media.thone`margin: 8vw 0 5vw;`};
`;
export const LinksWrapper = styled.div`
  width: fit-content;
  margin-top: 1vw;
  display: flex;
  flex-direction: column;

  a {
    position: relative;
    font-size: 1.5vw;
    margin-top: 1.4vw;

    ${media.tablet`font-size: 2vw;`};
    ${media.thone`
      font-size: 4vw;
      margin-top: 4vw;
    `};
  }
`;
