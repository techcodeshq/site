import styled from "styled-components";
import { media, TitleText } from "@styles";

export const GridWrap = styled.section``;
export const SectionWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6vw;

  ${media.thone`margin-bottom: 20vw;`};

  :first-child h1 {
    color: var(--blue);
  }

  :last-child h1 {
    color: var(--green);
  }

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
`;
export const StyledTitle = styled(TitleText)`
  margin: 0 0 1vw;
`;
export const DescriptionWrapper = styled.div`
  max-width: 53%;
  margin-bottom: 1vw;

  ${media.thone`max-width: 100%;`};
`;
