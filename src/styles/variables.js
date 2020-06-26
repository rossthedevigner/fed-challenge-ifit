import { keyframes } from 'styled-components/macro';

export const fadeInLeft = keyframes`
  0% {
      opacity:0;
      transform:translateX(-1.25rem)}
  100% {
      opacity:1;
      transform:translateX(0)
  }
}
`;

export const fadeInFromBottom = keyframes`
  0% {
      opacity:0;
      transform:translateY(0.9375rem)}
  100% {
      opacity:1;
      transform:translateY(0)
  }
}
`;
