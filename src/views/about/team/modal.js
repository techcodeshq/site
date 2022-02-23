import React, { useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import { Power4, gsap } from "gsap";
import { BigText, NormalText, Label, media } from "@styles";
import { Icon } from "@components";

const StickyWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const Cover = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(29, 29, 29, 0.7);
  backdrop-filter: saturate(180%);
`;
const Card = styled.div`
  background-color: var(--background);
  padding: 4vw 4vw 5vw 4vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 15%;
  z-index: 1000;

  ${media.thone`
    width: 100%;
    height: 100%;
    border-radius: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  `};
`;
const Name = styled(BigText)`
  font-weight: 500;
  margin-top: 0;
  text-transform: uppercase;
  margin-bottom: 0;
`;
const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  ${media.thone`padding-bottom: 6vw;`};

  a {
    color: var(--gray);
    cursor: pointer;
    transition: color 0.3s cubic-bezier(0.4, 0, 0, 1);

    :hover {
      color: var(--text);
    }

    svg {
      width: 1.4rem;
    }
  }
`;

const Modal = ({ name, description, position, modalOpen, setModalOpen }) => {
  let popOver = useRef(null);
  let popOverBody = useRef(null);
  let backdrop = useRef(null);

  const handleKeydown = useCallback(
    e => {
      if (!modalOpen) return;

      if (e.which === 27 || e.key === "Escape") setModalOpen(!modalOpen);
    },
    [modalOpen],
  );

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("keydown", e => handleKeydown(e));

      return () => {
        window.removeEventListener("keydown", e => handleKeydown(e));
      };
    }, 100);
  }, [handleKeydown]);

  useEffect(() => {
    let tl = gsap.timeline();

    if (modalOpen) {
      tl.to(popOver, { autoAlpha: 1 })
        .from(popOver, { yPercent: 0, ease: Power4.easeOut, duration: 1 }, "-=0.5")
        .to(
          popOverBody,
          {
            yPercent: 0,
            ease: Power4.easeOut,
            duration: 0.6,
          },
          "-=1",
        )
        .to(
          backdrop,
          {
            autoAlpha: 1,
            backdropFilter: "blur(20px)",
            ease: Power4.easeOut,
            duration: 0.4,
          },
          "-=1",
        );
    } else {
      tl.to(popOver, { autoAlpha: 0, ease: Power4.easeOut, duration: 1 })
        .to(
          popOverBody,
          {
            yPercent: 50,
            ease: Power4.easeOut,
            duration: 0.6,
          },
          "-=1",
        )
        .to(
          backdrop,
          {
            backdropFilter: "blur(0px)",
            autoAlpha: 0,
            ease: Power4.easeOut,
            duration: 0.4,
          },
          "-=1",
        );
    }
  }, [modalOpen]);

  useEffect(() => {
    if (modalOpen) {
      if (window !== "undefined") {
        window.scroll.stop();
      }
    } else {
      if (window !== "undefined") {
        window.scroll.start();
      }
    }
  }, [modalOpen]);

  return (
    <>
      <StickyWrapper
        ref={el => (backdrop = el)}
        data-scroll
        data-scroll-sticky
        data-scroll-target="#___sticky">
        <Card ref={el => (popOver = el)}>
          <div ref={el => (popOverBody = el)}>
            <IconWrapper>
              <a onClick={() => setModalOpen(false)}>
                <Icon name="close" />
              </a>
            </IconWrapper>
            <Name>{name}</Name>
            <Label>{position}</Label>
            <NormalText>{description}</NormalText>
          </div>
        </Card>

        <Cover onClick={() => setModalOpen(false)} />
      </StickyWrapper>
    </>
  );
};

export default Modal;
