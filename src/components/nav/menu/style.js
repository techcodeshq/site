import styled from "styled-components";
import { media } from "@styles";

export const PageFill = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(238, 238, 238, 0.7);
  backdrop-filter: saturate(180%);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
`;
export const SlideOver = styled.aside`
  position: absolute;
  display: flex;
  align-items: center;
  background-color: var(--background);
  width: 50rem;
  height: 100vh;
  top: 0;
  right: 0;
  z-index: 1000;
  white-space: nowrap;
  opacity: 0;
  ${media.tablet`width: 100vw;`};
`;
export const SlideContainer = styled.div`
  width: 50rem;
  height: 100%;
  padding: 0 5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${media.tablet`
    position: relative;
    padding: 0 2rem;
  `};
`;
export const SlideBody = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding-top: 3rem;
  ${media.thone`padding-top: 2rem;`};
`;
export const InnerBody = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${media.thone`flex-direction: column-reverse;`};
`;
export const SlideFooter = styled.div`
  padding-bottom: 6rem;
  a {
    top: 0.5rem;
    font-size: 18px;
    font-weight: 500;
    line-height: 30px;
    ${media.phone`
      font-size: 18px;
      line-height: 24px;
    `};
  }
  ${media.thone`padding-bottom: 4rem;`};
`;
export const ColWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  justify-content: start;
  grid-gap: 4rem;
  ${media.thone`
    grid-gap: 2rem;
    :first-child {
      display: none;
    }
    :last-child {
      margin-bottom: 4rem;
    }
  `};
  ${media.phone`
    grid-gap: 1rem;
    :last-child {
      margin-bottom: 2rem;
    }
  `};
`;
export const NavList = styled.div`
  display: flex;
  flex-direction: column;
  a {
    font-size: 68px;
    font-weight: 500;
    line-height: 78px;
    color: var(--text);
    ${media.phone`
      font-size: 48px;
      line-height: 58px;
    `};
  }
`;
export const NavItem = styled.div`
  position: relative;
  display: block;
  :first-child {
    padding: 0 0 9px;
    ${media.phone`padding: 0;`};
  }
  :not(:first-child) {
    padding: 9px 0;
    ${media.phone`padding: 0;`};
  }
`;
// HERE SMALLTEXT

export const NavLabel = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
  margin: 0;
  color: var(--gray);
`;
export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  a {
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    ${media.phone`
      font-size: 18px;
      line-height: 24px;
    `};
    :last-child {
      margin-top: 1rem;
    }
  }
`;
