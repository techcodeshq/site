import styled from "styled-components";
import { BigText, media, SmallText } from "@styles";

export const SupportSection = styled.section`
  margin-top: 10vw;
  padding: 5vw 0;
  background-color: var(--accent);

  ${media.thone`padding: 10vw 0;`};

  .swiper {
    width: 100%;
    padding-left: 7vw;
    margin-top: 8vw;
  }
`;
export const SupportTitle = styled(BigText)`
  max-width: 45%;
  margin: 2vw 0 0 0;

  ${props => props.noMargin && `margin: 0;`};
  ${media.thone`
    max-width: 100%;
    margin: 8vw 0 5vw;
  `};
`;
export const DescriptionWrapper = styled.div`
  max-width: 52%;

  ${media.thone`max-width: 100%;`};
`;
export const SlideItem = styled.div`
  display: grid;
  grid-gap: 2vw;
  grid-template-columns: auto 1fr;
`;
export const CardTitle = styled(BigText)`
  margin: 0;
  max-width: 75%;

  ${props => props.index === 1 && `color: var(--green);`};
  ${props => props.index === 2 && `color: var(--red);`};
  ${props => props.index === 3 && `color: var(--blue);`};
  ${props => props.index === 4 && `color: var(--purple);`};
  ${media.thone`max-width: 100%;`};
`;
export const CardText = styled(SmallText)`
  max-width: 50%;

  ${media.thone`max-width: 100%;`};
`;
