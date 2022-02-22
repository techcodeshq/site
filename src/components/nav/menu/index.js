import React, { useEffect, useRef } from "react";
import { Power4, gsap } from "gsap";
import { MovingLink, OutsideMovingLink, UnderlineLink, SOCIALS } from "@components";
import {
  PageFill,
  SlideOver,
  SlideContainer,
  SlideBody,
  SlideFooter,
  InnerBody,
  ColWrapper,
  NavList,
  NavLabel,
  NavItem,
  SocialWrapper,
} from "./style";

const Menu = ({ menuOpen, toggleMenu, location }) => {
  let popOver = useRef(null);
  let popOverBody = useRef(null);
  let backdrop = useRef(null);

  useEffect(() => {
    let tl = gsap.timeline();

    if (menuOpen) {
      tl.to(popOver, { xPercent: 0, opacity: 1, ease: Power4.easeOut, duration: 1 })
        .to(
          popOverBody,
          {
            xPercent: 0,
            ease: Power4.easeOut,
            duration: 1,
          },
          "-=1",
        )
        .to(
          backdrop,
          {
            autoAlpha: 1,
            backdropFilter: "blur(20px)",
            ease: Power4.easeOut,
            duration: 0.6,
          },
          "-=1",
        );
    } else {
      tl.to(popOver, { xPercent: 100, opacity: 0, ease: Power4.easeOut, duration: 1 })
        .to(
          popOverBody,
          {
            xPercent: 50,
            ease: Power4.easeOut,
            duration: 1,
          },
          "-=1",
        )
        .to(
          backdrop,
          {
            backdropFilter: "blur(0px)",
            autoAlpha: 0,
            ease: Power4.easeOut,
            duration: 0.6,
          },
          "-=1",
        );
    }
  }, [menuOpen, location]);

  useEffect(() => {
    if (menuOpen) {
      if (window !== "undefined") {
        window.scroll.stop();
      }
    } else {
      if (window !== "undefined") {
        window.scroll.start();
      }
    }
  }, [menuOpen]);

  return (
    <>
      <PageFill ref={el => (backdrop = el)} onClick={toggleMenu} />

      <SlideOver ref={el => (popOver = el)}>
        <SlideContainer ref={el => (popOverBody = el)}>
          <SlideBody>
            <InnerBody>
              <ColWrapper>
                <NavLabel>Socials</NavLabel>
                <SocialWrapper>
                  <div>
                    <OutsideMovingLink href={SOCIALS.INSTAGRAM} text="Instagram" />
                  </div>
                  <div>
                    <OutsideMovingLink href={SOCIALS.TWITTER} text="Twitter" />
                  </div>
                  <div>
                    <OutsideMovingLink href={SOCIALS.GITHUB} text="GitHub" />
                  </div>
                  <div>
                    <OutsideMovingLink href={SOCIALS.LINKEDIN} text="LinkedIn" />
                  </div>
                  <div>
                    <OutsideMovingLink href={SOCIALS.YOUTUBE} text="YouTube" />
                  </div>
                </SocialWrapper>
              </ColWrapper>
              <ColWrapper>
                <NavLabel>Menu</NavLabel>
                <NavList>
                  <NavItem>
                    <MovingLink onClick={toggleMenu} to="/about" text="About" />
                  </NavItem>
                  <NavItem>
                    <MovingLink onClick={toggleMenu} to="/volunteer" text="Volunteer" />
                  </NavItem>
                  <NavItem>
                    <MovingLink onClick={toggleMenu} to="/partner" text="Partner" />
                  </NavItem>
                  <NavItem>
                    <MovingLink onClick={toggleMenu} to="/initiatives" text="Initiatives" />
                  </NavItem>
                  <NavItem>
                    <MovingLink onClick={toggleMenu} to="/contact" text="Contact" />
                  </NavItem>
                </NavList>
              </ColWrapper>
            </InnerBody>
          </SlideBody>
          <SlideFooter>
            <NavLabel>Get in touch</NavLabel>
            <UnderlineLink href="mailto:team@techcodes.com">team@techcodes.com</UnderlineLink>
          </SlideFooter>
        </SlideContainer>
      </SlideOver>
    </>
  );
};

export default Menu;
