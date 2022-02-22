import { NormalText, TitleText } from "@styles";
import styled from "styled-components";
import { media } from "@styles";

export const TeamSection = styled.section``;
export const TitleWrapper = styled.div`
  max-width: 80%;
  text-align: center;
  margin: 0 auto;

  ${media.thone`
    max-width: 100%;
    text-align: left;
    margin: 0;
  `};
`;
export const SectionTitle = styled(TitleText)`
  color: var(--blue);
  margin-top: 1vw;
  margin-bottom: 1.4vw;
`;
export const SectionDescription = styled(NormalText)`
  max-width: 75%;
  margin: 0 auto;

  ${media.thone`
    max-width: 100%;
    margin: 0;
  `};
`;
export const DirectorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2vw;
  margin-top: 2vw;
`;
export const HoverWrapper = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.4);
  color: #f3f2f2;
  opacity: 0;
  transition: all 0.2s cubic-bezier(0.43, 0.13, 0.23, 0.96) !important;
  font-size: 25px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const ImageWrapper = styled.a`
  position: relative;
  border-radius: 1vw;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.43, 0.13, 0.23, 0.96) !important;
  z-index: 2;
  img {
    transition: all 0.5s cubic-bezier(0.43, 0.13, 0.23, 0.96) !important;
  }
  :hover {
    border-radius: 4vw;
    ${HoverWrapper} {
      opacity: 1;
    }
    img {
      transform: scale(1.1) !important;
    }
  }
`;
