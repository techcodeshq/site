import styled from "styled-components";
import { media, NormalText } from "@styles";

export const ArticleWrap = styled.article`
  position: relative;
  width: 100%;
  padding-bottom: 10vw;
`;
export const ContentWrap = styled.div`
  display: grid;
  grid-template-columns: auto 70%;
  grid-gap: 4vw;
  margin-top: 4vw;
  ${media.thone`
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  `};
`;
export const ArticleText = styled(NormalText)`
  margin-bottom: 0;
  color: var(--text);
`;
export const ArticleLink = styled.a`
  color: var(--theme);
  text-decoration: none;
  :hover {
    color: var(--text);
  }
`;
export const SubHeading = styled.p`
  font-weight: 500;
  font-size: 2.45vw;
  margin-bottom: 4vw;
  margin-top: 0;
  ${media.tablet`font-size: 24px;`};
  ${media.tablet`font-size: 22px;`};
`;
export const LinkWrapper = styled.div`
  margin-top: 1vw;
  font-size: 1.45vw;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  text-align: center;
  div:not(:first-child) {
    margin-top: 4vw;
  }
  ${media.tablet`
    font-size: 16px;
    margin-top: 5vw;
  `};
`;
export const ImageWrapper = styled.div`
  width: 100%;
  margin-top: 4vw;
  ${media.tablet`margin-top: 20px;`};
  img {
    border-radius: 4vw;
  }
`;
export const SplitWrapper = styled(ImageWrapper)`
  display: grid;
  grid-gap: 4vw;
  grid-template-columns: ${props => (props.uneven ? `2fr 1fr` : `auto auto`)};
  ${media.tablet`
    grid-template-columns: 1fr;
    grid-template-rows: ${props => (props.split ? `1fr 1fr` : `1fr`)};
    grid-gap: 20px;
  `};
`;
export const ImagesWrap = styled.div`
  margin-top: 6vw;
  ${media.tablet`margin-top: 60px;`};
`;
