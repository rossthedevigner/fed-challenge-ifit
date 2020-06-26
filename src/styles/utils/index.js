import { css } from 'styled-components/macro';

export const staggerElement = (stagger = 100, property, value) => {
  let styles = '';

  for (let i = 0; i <= 4; i++) {
    styles += `
      :nth-of-type(${i}) {
        ${property}: ${value};
        transition-delay: ${stagger * i}ms;
      }
    `;
  }

  return css`
    ${styles}
  `;
};
