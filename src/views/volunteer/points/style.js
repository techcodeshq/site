import styled from "styled-components";
import { media, NormalText, TitleText } from "@styles";

export const SectionWrapper = styled.section`
  margin-top: 10vw;
  padding: 5vw 0;
  background-color: var(--accent);

  ${media.thone`padding: 10vw 0;`};
`;
export const StyledTitle = styled(TitleText)`
  margin: 0 0 1vw;
  color: var(--red);
`;
export const ListTitle = styled(NormalText)`
  font-weight: 700;
`;
export const GridWrap = styled.div`
  display: grid;
  grid-row-gap: 2vw;
  grid-column-gap: 8vw;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 4vw;

  ${media.thone`
    grid-template-columns: 1fr;
    grid-gap: 6vw;
  `};
`;
