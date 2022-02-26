import styled from "styled-components";
import { media, NormalText, TitleText } from "@styles";

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  padding-top: 20vmin;
`;
export const SectionTitle = styled(TitleText)`
  color: var(--text);
  margin: 0;
`;
export const ArticleDate = styled(NormalText)``;
export const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 4vw;
  img {
    border-radius: 4vw;
  }
`;
