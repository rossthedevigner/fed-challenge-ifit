import React, { useRef, useLayoutEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { useOnScreen } from '../../helpers/hooks/useOnScreen';

import { ButtonCTA } from '../../components/Buttons/Buttons';
import { fadeInLeft, fadeInFromBottom } from '../../styles/variables';

import heroImage from '../../assets/images/marketing/pro-form-hero-image.png';

const HeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: calc(75% - 3.125rem);
  min-height: 23.25rem;

  @media ${(props) => props.theme.breakpoints.large} {
    padding-top: calc(80vh - 1.75rem);
  }

  max-height: 50.0625rem;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
`;

const HeroIntroText = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.colors.white};
  text-align: center;
  font-size: 1.625rem;
  font-weight: 600;
  letter-spacing: 0.063rem;
  line-height: 1.19;
  margin-bottom: 3.5rem;

  @media ${(props) => props.theme.breakpoints.large} {
    font-size: 3rem;
  }

  @media ${(props) => props.theme.breakpoints.large} {
    font-size: 4.375rem;
  }

  ${() => css`
    animation: ${fadeInLeft} 1.2s ease-in-out backwards 0.1s;
  `}
`;

const HeroCTAContainer = styled.div`
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 2.5rem;
  width: 100%;
  max-width: 63.125rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;

  @media ${(props) => props.theme.breakpoints.large} {
    padding: 0 1.25rem;
  }
`;

const HeroImage = styled.div`
  position: absolute;
  background: black url(${heroImage}) no-repeat top/cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.79;
`;

const JoinButton = styled(ButtonCTA)`
  background-color: ${(props) => props.theme.colors.royalBlue};
  color: ${(props) => props.theme.colors.white};
  width: 12rem;
  @media ${(props) => props.theme.breakpoints.large} {
    width: 24.5rem;
  }

  ${() => css`
    animation: 0.42s ease-out 0.8s backwards 1 ${fadeInFromBottom};
  `}
`;

const Hero = ({ setIsNavSticky }) => {
  const heroRef = useRef(null);
  const { inView } = useOnScreen(heroRef, { threshold: 0, rootMargin: '-10px 0px 0px' });

  useLayoutEffect(() => {
    setIsNavSticky(inView);
  }, [inView, setIsNavSticky]);

  return (
    <HeroContainer ref={heroRef}>
      <HeroImage />
      <HeroCTAContainer>
        <HeroIntroText>The best personal training, right in your own home</HeroIntroText>
        <JoinButton buttonType="small">Join iFit Coach</JoinButton>
      </HeroCTAContainer>
    </HeroContainer>
  );
};

export { Hero };
