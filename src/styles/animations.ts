import { keyframes } from 'styled-components';

export const AnimationFadeIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  } to {
    transform: translateY(0);
    opacity: 1;
  }
`;
