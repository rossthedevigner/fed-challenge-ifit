import React, { useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { ButtonSignUp } from '../Buttons/Buttons';
import { staggerElement } from '../../styles/utils';

import { useAppContext } from '../../context/AppProvider';

const MobileMenuContainer = styled.nav`
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
  background: ${(props) => props.theme.colors.white};
  width: 18.75rem;
  height: 100vh;
  padding: 10rem 2rem 0;
  transition: transform 0.28s ease-in-out;
  box-shadow: 0.0625rem 0rem 1rem 0 ${(props) => props.theme.colors.shadowGrey};
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(106%)')};

  @media ${(props) => props.theme.breakpoints.medium} {
    display: none;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
    &:hover {
      color: ${(props) => props.theme.colors.royalBlue};
    }
  }

  li {
    transition: opacity 0.28s ease-in-out;
    opacity: 0;

    ${({ open }) =>
      open &&
      css`
        ${staggerElement(140, 'opacity', 1)}
      `};
  }
`;

const StyledBurger = styled.button`
  position: absolute;
  top: -1rem;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media ${(props) => props.theme.breakpoints.medium} {
    display: none;
  }

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.125rem;
    background: ${(props) => props.theme.colors.darkGrey};
    border-radius: 0.625rem;
    transition: opacity 0.2s ease-in-out, transform 0.12s ease-in-out;
    position: relative;
    transform-origin: 0.0625rem;

    :first-child {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? '0' : '1')};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
    }
  }
`;

const HamburgerButton = ({ isOpen, handleMenuOpen }) => {
  return (
    <StyledBurger open={isOpen} onClick={() => handleMenuOpen(!isOpen)}>
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

const MobileNavWrapper = styled.div`
  position: relative;
`;

const MobileButtonSignUp = styled(ButtonSignUp)`
  align-self: stretch;
  position: relative;
  margin-bottom: 2.5rem;
`;

const MobileMenu = (props) => {
  const { children } = props;
  const { isMobileNavOpen, handleSetIsMobileNavOpen } = useAppContext();

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;

    if (isMobileNavOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style = '';
    }

    return () => (document.body.style.overflow = originalStyle);
  }, [isMobileNavOpen]);

  return (
    <MobileNavWrapper>
      <HamburgerButton isOpen={isMobileNavOpen} handleMenuOpen={handleSetIsMobileNavOpen} />
      <MobileMenuContainer open={isMobileNavOpen}>
        <MobileButtonSignUp>Sign Up</MobileButtonSignUp>
        {children}
      </MobileMenuContainer>
    </MobileNavWrapper>
  );
};

export { MobileMenu };
