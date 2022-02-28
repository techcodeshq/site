import styled from "styled-components";
import { TitleText, media } from "@styles";

export const ContactSection = styled.section`
  overflow: hidden;
  padding: 15vw 0;

  ${media.thone`padding: 5vw 0;`};

  a {
    color: inherit;
    text-decoration: underline;

    :hover {
      text-decoration: none;
    }
  }

  ${media.thone`padding: 40vmin 0 20vw 0;`};
`;
export const GridSplit = styled.div`
  display: flex;
  justify-content: space-between;

  ${media.thone`flex-direction: column;`};
`;
export const LeftCol = styled.div`
  width: 40%;

  ${media.thone`
    width: 100%;
    margin-bottom: 10vw;
  `};
`;
export const RightCol = styled.div`
  width: 40%;
  ${media.thone`width: 100%;`};

  button {
    margin-top: 2vw;
    font-size: 1.5vw;
    font-weight: 600;

    ${media.tablet`font-size: 2vw;`};
    ${media.thone`font-size: 4vw;`};
  }
`;
export const ContactTitle = styled(TitleText)`
  color: var(--deepBlue);

  :nth-child(3) {
    margin-top: 0;
    margin-bottom: 5vw;
  }
  :not(:nth-child(3)) {
    margin: 0;
  }
`;
export const SuccessSubmit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
