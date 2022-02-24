import { media } from "@styles";
import styled from "styled-components";

export const ImageWrapper = styled.div`
  margin: 14vw 0;
  overflow: hidden;
  width: 100%;

  ${media.thone`margin: 30vw 0 20vw 0;`};

  img {
    overflow: hidden;
  }

  .gatsby-image-wrapper {
    transform: scale(1.1);
  }
`;
