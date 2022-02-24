import { NormalText, TitleText } from "@styles";
import styled from "styled-components";
import { media } from "@styles";

export const TeamSection = styled.section`
  margin-bottom: 10vw;
`;
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

  ${media.thone`margin: 8vw 0 5vw;`};
`;
export const SectionDescription = styled(NormalText)`
  max-width: 75%;
  margin: 0 auto;

  ${media.thone`
    max-width: 100%;
    margin: 0;
  `};
`;
export const TextWrapper = styled.div`
  text-align: center;

  p {
    line-height: 90%;
  }
`;
export const DirectorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4vw;
  margin-top: 6vw;

  ${media.thone`
    grid-template-columns: repeat(1, 1fr);
    margin-top: 8vw;
    grid-gap: 8vw;
  `};
`;
export const HoverWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
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
  display: table-cell;
  border-radius: 1vw;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.43, 0.13, 0.23, 0.96) !important;
  z-index: 2;
  cursor: pointer;
  .gatsby-image-wrapper {
    object-fit: cover;
    height: 40vw;
    width: 100%;

    ${media.thone`height: 80vw;`};
  }
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
  button {
    font-size: 1.5vw;

    ${media.tablet`font-size: 2vw;`};
    ${media.thone`font-size: 4vw;`};
  }
`;
export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8vw;
`;
export const ListItemWrapper = styled.div`
  :hover .gatsby-image-wrapper {
    opacity: 1;
  }
`;
export const TeamMember = styled.a`
  border-top: 2px solid var(--gray);
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  transition: color 0.3s cubic-bezier(0.4, 0, 0, 1);
  overflow: hidden;
  position: relative;
  z-index: 1;
  cursor: pointer;

  :before {
    content: "";
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--text);
    transform: scaleY(0);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
    transform-origin: center bottom;
  }

  :hover {
    color: var(--background);
    :before {
      transform: scaleX(1);
    }
  }

  :last-child {
    border-bottom: 2px solid var(--gray);
  }
`;
export const HoverImageWrap = styled.div`
  width: 20vw;
  height: 20vw;
  position: absolute;
  left: 40%;
  margin-top: -8vw;

  .gatsby-image-wrapper {
    object-fit: cover;
    height: 100%;
    width: 100%;
    opacity: 0;
    z-index: 2;
  }
`;
