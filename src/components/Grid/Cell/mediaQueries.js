import { css } from 'styled-components';

const breakpoints = {
  desktopLarge: 1200,
  desktop: 1024,
  tablet: 768,
};

export const forTablet = content => css`
  @media (min-width: ${breakpoints.tablet}px) {
    ${content}
  }
`;

export const forDesktop = content => css`
  @media (min-width: ${breakpoints.desktop}px) {
    ${content}
  }
`;

export const forDesktopLarge = content => css`
  @media (min-width: ${breakpoints.desktopLarge}px) {
    ${content}
  }
`;
