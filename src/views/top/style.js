import styled from "styled-components";
import { media, TitleText } from "@styles";
import { GatsbyImage } from "gatsby-plugin-image";

export const SectionWrapper = styled.div`
  background: linear-gradient(
    to bottom,
    var(--foreground) 0%,
    var(--foreground) 70%,
    var(--background) 70%,
    var(--background) 100%
  );
  padding: 10rem 0;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  a {
    font-size: 1.5vw;
    font-weight: 600;

    ${media.tablet`font-size: 2vw;`};
    ${media.thone`font-size: 4vw;`};
  }

  ${media.tablet`padding-top: 14rem;`};
  ${media.thone`text-align: left;`};
`;
export const LargeTitle = styled(TitleText)`
  color: var(--deepBlue);
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;

  ${media.thone`
    margin: 0;
    max-width: 100%;
  `};
`;
export const DescriptionWrapper = styled.div`
  margin: 0 auto 6vw auto;
  max-width: 60%;

  ${media.thone`
    margin: 6vw 0;
    max-width: 100%;
  `};
`;
export const ImageWrapper = styled.div`
  width: 100vw;
  ${props => props.link !== undefined && `margin-top: 5vw;`};

  ${media.thone`height: 70vh;`};
`;
export const HeroImage = styled(GatsbyImage)`
  border-radius: inherit;
  width: 100%;
  height: 100%;
`;
