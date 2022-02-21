import styled from "styled-components";
import media from "./media";

export const TitleText = styled.h1`
  font-size: 6vw;
  font-weight: bold;

  ${media.thone`font-size: 12vw;`};
`;
export const BigText = styled.p`
  font-size: 4vw;
  font-weight: 500;
  line-height: 129%;

  span {
    padding: 0 1rem;
    border-radius: 15px;
  }

  span.orange {
    color: var(--darkorange);
    background-color: var(--orange);
  }

  span.green {
    color: var(--darkgreen);
    background-color: var(--lightgreen);
  }

  ${media.thone`font-size: 8vw;`};
`;
export const MidText = styled.p`
  font-size: 2vw;
  font-weight: 500;

  ${media.tablet`font-size: 4vw;`};
  ${media.thone`font-size: 6vw;`};
`;
export const NormalText = styled.p`
  font-size: 1.5vw;

  ${media.tablet`font-size: 2vw;`};
  ${media.thone`font-size: 4vw;`};
`;
export const Label = styled(NormalText)`
  text-transform: uppercase;
  color: var(--gray);
  font-weight: bold;
  margin: 0;
`;
export const SmallText = styled.p`
  font-size: 18px;
`;
