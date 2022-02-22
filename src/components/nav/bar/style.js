import styled, { keyframes, css } from "styled-components";
import { media } from "@styles";
import { Link } from "gatsby";

export const HeadStickWrapper = styled.header`
  width: 100%;
  display: block;
  position: fixed;
  z-index: 999;
`;
export const RightSideWrapper = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 1vw;
    font-weight: 600;
    padding: 0.4vw 1.2vw;
    margin-right: 2vw;

    ${media.tablet`
      font-size: 2vw;
      padding: 1vw 2vw;
    `};
    ${media.thone`
      font-size: 3vw;
      padding: 1.4vw 4vw;
      margin-right: 4vw;
    `};
    ${media.phone`font-size: 3.5vw;`};
  }
`;
export const NavWrapper = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;
export const LogoWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  align-self: center;

  svg {
    color: var(--theme);
    height: 50px;
    position: relative;

    ${media.thone`height: 40px;`};
  }
`;
export const MenuButton = styled.button`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;
const NavAnimTop = keyframes`
    0% {
        opacity: 1;
        top: 0;
        left: 0;
        -webkit-transform: rotate(0) scaleX(1);
        transform: rotate(0) scaleX(1);
        -webkit-transform-origin: left center;
        transform-origin: left center
    }
    30% {
        opacity: 1;
        top: 0;
        left: 0;
        -webkit-transform: rotate(0) scaleX(0);
        transform: rotate(0) scaleX(0)
    }
    30.1% {
        opacity: 0;
        top: 0;
        left: 0;
        -webkit-transform: rotate(0) scaleX(0);
        transform: rotate(0) scaleX(0)
    }
    31% {
        opacity: 1;
        top: -5px;
        left: 3px;
        -webkit-transform: rotate(45deg) scaleX(0);
        transform: rotate(45deg) scaleX(0)
    }
    100%,80% {
        opacity: 1;
        top: -5px;
        left: 3px;
        -webkit-transform: rotate(45deg) scaleX(1);
        transform: rotate(45deg) scaleX(1);
        -webkit-transform-origin: left center;
        transform-origin: left center
    }
`;
const NavAnimBottom = keyframes`
    0% {
        opacity: 1;
        top: 0;
        left: 0;
        -webkit-transform: rotate(0) scaleX(1);
        transform: rotate(0) scaleX(1);
        -webkit-transform-origin: right center;
        transform-origin: right center
    }
    50% {
        opacity: 1;
        top: 0;
        left: 0;
        -webkit-transform: rotate(0) scaleX(0);
        transform: rotate(0) scaleX(0)
    }
    50.1% {
        opacity: 0;
        top: 0;
        left: 0;
        -webkit-transform: rotate(0) scaleX(0);
        transform: rotate(0) scaleX(0)
    }
    51%,55% {
        opacity: 1;
        top: -12px;
        left: -4px;
        -webkit-transform: rotate(-45deg) scaleX(0);
        transform: rotate(-45deg) scaleX(0)
    }
    100% {
        opacity: 1;
        top: -12px;
        left: -4px;
        -webkit-transform: rotate(-45deg) scaleX(1);
        transform: rotate(-45deg) scaleX(1);
        -webkit-transform-origin: right center;
        transform-origin: right center
    }
`;
export const BtnMenuBox = styled.span`
  position: relative;
  display: inline-block;
  width: 25px;
  vertical-align: middle;
  z-index: 1001;
  span {
    position: relative;
    display: block;
    width: 100%;
    height: 3px;
    margin: 5px 0;
    top: 0;
    z-index: 1;
    backface-visibility: hidden;
    background: currentColor;
    transition: top 0.3s 0.3s, transform 0.3s;
  }
  ${props =>
    props.menuOpen &&
    css`
      span:first-child {
        animation: ${NavAnimTop} 0.75s;
        top: 4px;
        transform: rotate(45deg) scaleX(1);
      }
      span:last-child {
        animation: ${NavAnimBottom} 0.75s;
        top: -3px;
        transform: rotate(-45deg) scaleX(1);
      }
    `};
  :before {
    content: "";
    display: block;
    position: absolute;
    inset: -20px;
  }
`;
