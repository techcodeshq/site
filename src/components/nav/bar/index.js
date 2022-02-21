import React, { useState, useEffect, useCallback } from "react";
import { Container } from "@styles";
import { Icon, Button } from "@components";
import Menu from "../menu";
import {
  HeadStickWrapper,
  NavWrapper,
  LogoWrapper,
  MenuButton,
  BtnMenuBox,
  RightSideWrapper,
} from "./style";

const Bar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  const handleKeydown = useCallback(
    e => {
      if (!menuOpen) return;

      if (e.which === 27 || e.key === "Escape") toggleMenu();
    },
    [menuOpen, toggleMenu],
  );

  useEffect(() => {
    setTimeout(() => {
      window.addEventListener("keydown", e => handleKeydown(e));

      return () => {
        window.removeEventListener("keydown", e => handleKeydown(e));
      };
    }, 100);
  }, [handleKeydown]);

  return (
    <HeadStickWrapper data-scroll data-scroll-sticky data-scroll-target="#___sticky">
      <Container default>
        <NavWrapper>
          <LogoWrapper to="/">
            <Icon name="logo" />
          </LogoWrapper>
          <RightSideWrapper>
            <Button href="https://bank.hackclub.com/donations/start/techcodes">Donate</Button>
            <MenuButton aria-label="menu" onClick={toggleMenu}>
              <BtnMenuBox menuOpen={menuOpen}>
                <span />
                <span />
              </BtnMenuBox>
            </MenuButton>
          </RightSideWrapper>
          <Menu menuOpen={menuOpen} toggleMenu={toggleMenu} />
        </NavWrapper>
      </Container>
    </HeadStickWrapper>
  );
};

export default Bar;
