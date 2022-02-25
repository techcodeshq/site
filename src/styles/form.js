import styled, { css } from "styled-components";
import media from "./media";

const TextStyle = css`
  font-size: 1.5vw;
  font-weight: 500;

  ${media.tablet`font-size: 2vw;`};
  ${media.thone`font-size: 4vw;`};
`;

export const FormGroup = styled.div`
  margin-bottom: 2.4vw;
  ${media.thone`margin-bottom: 4.5vw;`};

  label {
    ${TextStyle};
    width: 100%;
    display: inline-block;
    margin-bottom: 1vw;
    color: var(--text);

    ${media.thone`margin-bottom: 2.5vw;`};
  }
  input {
    ${TextStyle};
    display: block;
    width: 100%;
    padding: 1vw 1.25vw;
    color: var(--text);
    background-color: var(--accent);
    border-radius: 15px;

    ${media.thone`padding: 2.5vw 2.75vw;`};

    :focus {
      border: none;
    }
  }
  textarea {
    ${TextStyle};
    resize: vertical;
    display: block;
    width: 100%;
    min-height: 100px;
    max-height: 300px;
    padding: 1vw 1.25vw;
    color: var(--text);
    background-color: var(--accent);
    border-radius: 15px;

    ${media.thone`padding: 2.5vw 2.75vw;`};
  }

  ::placeholder {
    color: var(--gray);
  }
  span {
    ${TextStyle};
    color: var(--red);
  }
`;
