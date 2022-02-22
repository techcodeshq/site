import styled from "styled-components";
import { media, TitleText } from "@styles";

export const InfoSection = styled.section`
  overflow: hidden;
  padding: 10vw 0;
`;
export const Card = styled.div`
  background-color: var(--accent);
  border-radius: 10%;
  padding: 2vw;

  transition: all 0.3s cubic-bezier(0.4, 0, 0, 1);

  :hover {
    transform: scale(1.1);
  }

  ${media.thone`padding: 6vw;`};
`;
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 4vw;

  ${media.thone`
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 6vw;
  `};
`;
export const CardTitle = styled(TitleText)`
  margin-top: 0;
  color: ${props => (props.red ? `var(--red)` : `var(--green)`)};
`;
