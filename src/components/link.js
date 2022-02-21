import React, { useRef, useCallback } from "react";
import styled, { css } from "styled-components";
import { gsap, Power2 } from "gsap";
import { Link } from "gatsby";

const UnderlineStyle = css`
  color: inherit;
  pointer-events: auto;
  text-decoration: none;
  font-size: inherit;
  position: relative;
  cursor: pointer;
  :after,
  :before {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: currentColor;
    transition: transform 1.1s cubic-bezier(0.19, 1, 0.22, 1);
  }
  :before {
    transition-delay: 0s;
    transform: scaleX(0);
    transform-origin: left;
  }
  :after {
    transform-origin: right;
  }
  :after,
  :hover:before {
    transition-delay: 0.25s;
  }
  :hover:before {
    transform: scaleX(1);
  }
  :hover:after {
    transition-delay: 0s;
    transform: scaleX(0);
  }
`;
const MovingLinkStyle = css`
  color: inherit;
  pointer-events: auto;
  text-decoration: none;
  font-size: inherit;
  display: inline-block;
  position: relative;
  cursor: pointer;
  :hover span {
    transform: translateY(-105%);
    :before {
      transform: skewY(7deg);
    }
    :after {
      transform: skewY(0);
      color: var(--theme);
    }
  }
  em {
    font-style: normal;
    display: block;
    position: relative;
    overflow: hidden;
    padding: 0 0.01em 0 0;
    span {
      display: inline-block;
      color: transparent;
      transition: transform 1.2s cubic-bezier(0.19, 1, 0.22, 1);
      :before {
        top: 0;
        transform: skewY(0);
        transform-origin: right bottom;
        transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);
      }
      :after {
        top: 105%;
        transform: skewY(7deg);
        transform-origin: left top;
        transition: transform 2s cubic-bezier(0.19, 1, 0.22, 1);
      }
      :after,
      :before {
        content: attr(data-text);
        display: block;
        position: absolute;
        color: ${props => (props.textColor ? props.textColor : "var(--text)")};
      }
    }
  }
`;
const ExternalUnderlineLink = styled.a`
  ${UnderlineStyle};
`;
const InternalUnderlineLink = styled(Link)`
  ${UnderlineStyle};
`;
const ExternalMovingLink = styled.a`
  ${MovingLinkStyle};
`;
const InternalMovingLink = styled(Link)`
  ${MovingLinkStyle};
`;

// We have to split these two up into two separate components because
// for some reason react only let's us use .current for the ref with the
// the href type lnk
export const MovingLink = props => {
  let movingContainer = useRef(null);
  const { textColor, text, to, children, ...rest } = props;

  const handleMouseMove = useCallback(e => {
    let bounds = movingContainer.getBoundingClientRect();

    gsap.to(movingContainer, {
      x: (e.clientX - bounds.left - 70) / 4,
      y: (e.clientY - bounds.top - movingContainer.clientHeight) / 4,
      duration: 0.3,
      ease: Power2.easeOut,
    });
  }, []);

  const handleMouseExit = useCallback(() => {
    gsap.to(movingContainer, { x: 0, y: 0, duration: 0.3 });
  }, []);

  return (
    <InternalMovingLink
      to={to}
      onMouseLeave={() => handleMouseExit()}
      onMouseMove={e => handleMouseMove(e)}
      ref={el => (movingContainer = el)}
      textColor={textColor}
      {...rest}>
      <em>
        <span data-text={text}>{text}</span>
      </em>
    </InternalMovingLink>
  );
};
export const OutsideMovingLink = props => {
  let movingContainer = useRef(null);
  const { textColor, text, href, target, children, ...rest } = props;

  const handleMouseMove = useCallback(e => {
    let bounds = movingContainer.current.getBoundingClientRect();

    gsap.to(movingContainer.current, {
      x: (e.clientX - bounds.left - 70) / 4,
      y: (e.clientY - bounds.top - movingContainer.current.clientHeight) / 4,
      duration: 0.3,
      ease: Power2.easeOut,
    });
  }, []);

  const handleMouseExit = useCallback(() => {
    gsap.to(movingContainer.current, { x: 0, y: 0, duration: 0.3 });
  }, []);

  return (
    <ExternalMovingLink
      ref={movingContainer}
      href={href}
      target={target || "_blank"}
      rel={!target ? "noopener noreferrer" : undefined}
      onMouseLeave={() => handleMouseExit()}
      onMouseMove={e => handleMouseMove(e)}
      textColor={textColor}
      {...rest}>
      <em>
        <span data-text={text}>{text}</span>
      </em>
    </ExternalMovingLink>
  );
};

export const UnderlineLink = props => {
  const { href, to, target, children, ...rest } = props;

  if (to) {
    return (
      <InternalUnderlineLink to={to} {...rest}>
        {children}
      </InternalUnderlineLink>
    );
  }

  if (href) {
    return (
      <ExternalUnderlineLink
        href={href}
        target={target || "_blank"}
        rel={!target ? "noopener noreferrer" : undefined}
        {...rest}>
        {children}
      </ExternalUnderlineLink>
    );
  }

  return;
};
