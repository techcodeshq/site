import styled from "styled-components";
import { media, NormalText, TitleText } from "@styles";

export const SectionWrapper = styled.div`
  background-color: var(--foreground);
  padding-top: 10rem;

  ${media.tablet`padding-top: 14rem;`};
`;
export const GridWrapper = styled.div`
  display: flex;
`;
export const LeftCol = styled.div`
  position: sticky;
`;
export const RightCol = styled.div`
  max-width: 40%;
  margin-left: auto;
`;
export const LargeTitle = styled(TitleText)`
  color: var(--deepBlue);
`;
export const Subtitle = styled(NormalText)`
  font-weight: 500;
`;
