import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components/macro';

const sizes = {
  small: '31.313em', // 501px
  medium: '48.063em', // 769px
  large: '64.063em', // 1025px
  xlarge: '75.063em', // 1201px
  xxlarge: '90.000em' // 1440px
};

const breakpoints = {
  small: `(min-width: ${sizes.small})`,
  medium: `(min-width: ${sizes.medium})`,
  large: `(min-width: ${sizes.large})`,
  xlarge: `(min-width: ${sizes.xlarge})`,
  xxlarge: `(min-width: ${sizes.xxlarge})`
};

const theme = {
  colors: {
    white: 'rgb(255, 255, 255)',
    fullGrey: 'rgba(46, 49, 52)',
    darkGrey: 'rgba(46, 49, 52, 0.8)',
    shadowGrey: 'rgba(46, 49, 52, 0.4)',
    softGrey: 'rgb(213, 214, 214)',
    borderGrey: 'rgb(88, 90, 93)',
    charcoal: 'rgb(52, 56, 60)',
    offWhite: 'rgb(244, 245, 247)',
    royalBlue: 'rgb(0, 105, 210)',
    darkBlue: 'rgb(189, 16, 224)',
    overlayBlack: 'rgba(0, 12, 40, 0.54)',
    black: 'rgba(0, 0, 0, 1)'
  },
  fonts: ['"Open Sans"'],
  sizes,
  breakpoints
};

export const GlobalStyles = createGlobalStyle`
  ${normalize}

  html, body {
    font-family: ${theme.fonts.join(',')}, Arial, Helvetica, sans-serif;
    background-color: ${theme.colors.white};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    height: 100%;
    margin: 0;
    padding: 0;    

    &.mobileNav-open {
      overflow: hidden;
    }

  }

  *, *:before, *:after {
    -webkit-box-sizing: border-box; 
    -moz-box-sizing: border-box; 
    box-sizing: border-box;
  }

  p {
    margin: 0;
    padding: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;    
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${theme.colors.darkGrey};
    &:hover {
      color: ${theme.colors.royalBlue};
    }
  }

  button {
    &:focus {
    outline: none;
    }
  }
`;

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

export { Theme };
