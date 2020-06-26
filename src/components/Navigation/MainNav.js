import React from 'react';
import styled from 'styled-components/macro';
import { ButtonSignUp } from '../Buttons/Buttons';
import { MobileMenu } from '../Navigation/MobileMenu';
import Icon from '../Icons/Icon';

import { mainNavigationLinks } from '../../data';

const MainNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 4.5rem;
  padding: 0.625rem 1.5rem 0.625rem 1rem;
  box-shadow: 0 0.063rem 0.125rem rgba(46, 49, 52, 0.4);
  background-color: rgb(255, 255, 255);
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.medium} {
    padding: 0.625rem 1.5rem 0.625rem 2.5rem;
  }

  & .mobile-view {
    align-items: flex-start;
  }
`;

const MainMenuList = styled.ul`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 0.875rem;
  flex: 1 1 auto;
  margin: 0 auto;
  display: none;

  &.mobile-view {
    flex-direction: column;
    display: flex;
    flex: 1;
    justify-content: flex-start;
    margin: 0;
  }

  @media ${(props) => props.theme.breakpoints.medium} {
    display: flex;
  }
`;

const MainMenuItem = styled.li`
  text-align: center;
  padding-right: 2.5rem;

  &:last-child {
    padding-right: 0;
  }

  a {
    color: ${(props) => props.theme.colors.darkGrey};
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.063rem;
    line-height: 0.875rem;
    text-decoration: none;
    text-transform: uppercase;
  }

  .mobile-view & {
    padding: 1.25rem 1.5rem;
  }
`;

const IFitCoachLogo = styled.div`
  position: relative;
  width: 11.25rem;
  height: 1.5rem;
`;

const StyledButtonSignUp = styled(ButtonSignUp)`
  display: none;
  margin-left: auto;

  @media ${(props) => props.theme.breakpoints.medium} {
    display: flex;
  }
`;

const MenuList = ({ isMobile }) => {
  return (
    <MainMenuList className={`${isMobile ? 'mobile-view' : ''}`}>
      {mainNavigationLinks.map(({ title, link }) => {
        return (
          <MainMenuItem key={title}>
            <a href={link}>{title}</a>
          </MainMenuItem>
        );
      })}
    </MainMenuList>
  );
};

const MainNav = () => {
  return (
    <>
      <MainNavContainer>
        <IFitCoachLogo>
          <Icon name="ifitcoach" />
        </IFitCoachLogo>
        <MenuList />
        <StyledButtonSignUp buttonType="small">Sign Up</StyledButtonSignUp>
        <MobileMenu>
          <MenuList isMobile={true} />
        </MobileMenu>
      </MainNavContainer>
    </>
  );
};

export { MainNav };
