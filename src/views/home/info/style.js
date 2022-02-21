import styled from "styled-components";
import { NormalText, media } from "@styles";

export const InfoWrapper = styled.section`
  width: 100%;
  margin-top: 10vw;
`;
export const TopTextWrap = styled.div`
  max-width: 75%;

  ${media.thone`max-width: 100%;`};
`;
export const TitleText = styled(NormalText)`
  font-weight: 500;
  margin: 0;
`;
export const CardGridWrap = styled.div`
  display: grid;
  max-width: 75%;
  margin: 0 auto;
  grid-gap: 2vw;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  margin-top: 4vw;

  ${media.tablet`max-width: 100%;`};
  ${media.thone`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 4vw;
  `};
`;
export const Card = styled.div`
  background-color: var(--accent);
  border-radius: 55px;
  padding: 2vw;
  display: flex;
  transition: all 0.3s cubic-bezier(0.4, 0, 0, 1);

  :hover {
    transform: scale(1.1);
  }

  :nth-child(1) span {
    color: var(--green);
  }
  :nth-child(2) span {
    color: var(--red);
  }
  :nth-child(3) span {
    color: var(--blue);
  }
  :nth-child(4) span {
    color: var(--purple);
  }
`;
export const Number = styled.span`
  width: 3vw;
  height: 3vw;
  border-radius: 55%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 3px solid currentColor;
  font-size: 2vw;
  font-weight: 500;
  margin-right: 1vw;

  ${media.tablet`
    font-size: 4vw;
    width: 6vw;
    height: 6vw;
  `};
  ${media.thone`
    font-size: 6vw;
    width: 8vw;
    height: 8vw;
  `};
`;
