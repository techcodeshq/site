import styled from "styled-components";
import media from "./media";

const Container = styled.div`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${props =>
    props.default
      ? `
    padding-right: 2.1vw;
    padding-left: 2.1vw;
  `
      : `
    padding-right: 7vw;
    padding-left: 7vw;
  `}

  ${media.thone`
    padding-right: 7vw;
    padding-left: 7vw;
  `};
`;

export default Container;
