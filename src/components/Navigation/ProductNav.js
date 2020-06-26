import React from 'react';
import styled from 'styled-components/macro';

const ProductNavContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: 2.875rem;
  border-bottom: 0.0625rem solid ${(props) => props.theme.colors.softGrey};
`;

const ProductNavItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: auto;
  margin: 0 auto;
  font-size: 0.875rem;
  width: 100%;
`;

const ProductNavItem = styled.li`
  text-align: center;
  padding: 1rem;
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.063rem;
  line-height: 0.875rem;
  text-transform: uppercase;
  border-right: 0.0625rem solid ${(props) => props.theme.colors.softGrey};

  @media ${(props) => props.theme.breakpoints.medium} {
    padding: 1rem 2.5rem;
  }
`;

const ProductNav = () => {
  return (
    <ProductNavContainer>
      <ProductNavItems>
        <ProductNavItem>
          <a href="/">Blog</a>
        </ProductNavItem>
        <ProductNavItem>
          <a href="/">Nourish</a>
        </ProductNavItem>
        <ProductNavItem>
          <a href="/">Shop</a>
        </ProductNavItem>
      </ProductNavItems>
    </ProductNavContainer>
  );
};

export { ProductNav };
