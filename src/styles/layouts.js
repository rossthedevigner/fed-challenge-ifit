import { css } from 'styled-components/macro';

export const gridWrap = css`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18rem, 1fr));
  grid-column-gap: 1.5rem;
`;
