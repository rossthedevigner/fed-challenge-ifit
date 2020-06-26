import React from 'react';
import styled from 'styled-components/macro';

import { ProductNav } from '../Navigation/ProductNav';
import { MainNav } from '../Navigation/MainNav';

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 100;
  transition: transform 0.28s ease-out;
  transform: translateY(0);

  &.hide {
    transition-timing-function: ease-in;
    transform: translateY(-101%);
  }
`;

const Header = ({ isNavSticky }) => {
  return (
    <HeaderContainer className={`${!isNavSticky ? 'hide' : ''}`}>
      <ProductNav />
      <MainNav />
    </HeaderContainer>
  );
};

export { Header };
