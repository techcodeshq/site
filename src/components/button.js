import React, { useRef, useCallback } from "react";
import { Link } from "gatsby";
import { gsap, Power2 } from "gsap";
import styled, { css } from "styled-components";

const ButtonStyle = css`
  font-size: inherit;
  font-weight: inherit;
  padding: 1vw 1.6vw;
  background-color: var(--theme);
  color: var(--alwayswhite);
  border-radius: 35px;

  :disabled {
    background-color: var(--gray);
  }
`;
const ButtonWrapper = styled.div`
  position: relative;
  width: fit-content;
`;
const ExternalButton = styled.a`
  ${ButtonStyle};
`;
const InternalButton = styled(Link)`
  ${ButtonStyle};
`;
const ButtonButton = styled.button`
  ${ButtonStyle};
`;

const Button = props => {
  let movingContainer = useRef(null);
  const { href, to, target, children, ...rest } = props;

  const handleMouseMove = useCallback(e => {
    let bounds = movingContainer.current.getBoundingClientRect();

    gsap.to(movingContainer.current, {
      x: (e.clientX - bounds.left - 30) / 4,
      y: (e.clientY - bounds.top - movingContainer.current.clientHeight) / 4,
      scale: 1.1,
      duration: 0.3,
      ease: Power2.easeOut,
    });
  }, []);

  const handleMouseExit = useCallback(() => {
    gsap.to(movingContainer.current, { x: 0, y: 0, scale: 1, duration: 0.3 });
  }, []);

  return (
    <ButtonWrapper
      ref={movingContainer}
      onMouseLeave={() => handleMouseExit()}
      onMouseMove={e => handleMouseMove(e)}>
      {href ? (
        <ExternalButton
          href={href}
          target={target || "_blank"}
          rel={!target ? "noopener noreferrer" : undefined}
          {...rest}>
          {children}
        </ExternalButton>
      ) : to ? (
        <InternalButton to={to} {...rest}>
          {children}
        </InternalButton>
      ) : (
        <ButtonButton {...rest}>{children}</ButtonButton>
      )}
    </ButtonWrapper>
  );
};

export default Button;
