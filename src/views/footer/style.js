import styled from "styled-components";
import { media, NormalText, SmallText } from "@styles";

export const FooterWrapper = styled.footer`
  width: 100%;
  padding: 6vw 0;
  overflow: hidden;
  background-color: var(--foreground);

  ${media.thone`padding: 10vw 0;`};
`;
export const ColContainer = styled.div`
  display: flex;
  width: 100%;

  ${props => props.social && media.thone`flex-direction: column;`};
`;
export const LinkContainer = styled(ColContainer)`
  justify-content: space-between;

  ${props => props.social && media.thone`flex-direction: column;`};
`;
export const GridContainer = styled(LinkContainer)`
  margin-bottom: 6vw;

  svg {
    color: var(--theme);
    height: 60px;
    position: relative;

    ${media.thone`height: 40px;`};
  }

  ${media.thone`flex-direction: column;`};
`;
export const Col = styled.div`
  :first-child {
    width: 42%;
    ${media.thone`width: 100%;`};

    a {
      font-size: 18px;
      font-weight: 500;
    }
  }
  :nth-child(2) {
    width: 30%;
    margin-right: 10%;
    margin-left: auto;

    ${media.tablet`
        width: 40%;
        margin-right: 0;
        margin-left: auto;
    `};
    ${media.thone`
        width: 100%;
        margin-left: 0;
        margin-top: 8vw;
    `};
  }
`;
export const LinksListWrap = styled.div`
  display: flex;
  flex-direction: column;

  a {
    color: var(--text);
    text-decoration: none;
    font-size: 1.5vw;
    font-weight: 500;

    :not(:first-child) {
      margin-top: 1vw;
    }

    ${media.tablet`font-size: 2vw;`};
    ${media.thone`font-size: 4vw;`};
  }
`;
export const FooterText = styled(SmallText)`
  color: var(--gray);
  margin-bottom: 4vw;
`;
export const LabelText = styled(NormalText)`
  color: var(--gray);
`;
export const SocialCol = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 1vw;
  }

  a {
    color: var(--text);
    text-decoration: none;
    font-size: 1.5vw;
    font-weight: 500;

    ${media.tablet`font-size: 2vw;`};
    ${media.thone`font-size: 4vw;`};
  }

  :first-child {
    a {
      width: fit-content;
    }
  }

  :not(:first-child) {
    margin-left: 5rem;

    ${media.tablet`margin-left: 2rem;`};
    ${media.thone`margin-left: 0;`};
  }
`;
export const Socials = styled.div`
  display: flex;
  align-items: center;
  svg {
    width: 2vw;
    margin-right: 1rem;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0, 1);
    color: var(--text);

    ${media.tablet`width: 3vw;`};
    ${media.thone`width: 5vw;`};

    :hover {
      transform: scale(1.1);
    }
  }
`;
export const CreditWrapper = styled.div`
  display: flex;
  align-items: flex-end;

  ${media.thone`margin-top: 10vw;`};
`;
export const CreditsLink = styled(NormalText)`
  color: var(--gray);
  font-weight: 500;
  white-space: nowrap;
  margin: 0;

  a {
    color: var(--text);
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
`;
