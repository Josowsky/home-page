const breakpoints = {
  desktopLarge: 1200,
  desktop: 1024,
  tablet: 768,
};

export const forTablet = content => `
  @media (min-width: ${breakpoints.tablet}px) {
    ${content}
  }
`;

export const forDesktop = content => `
  @media (min-width: ${breakpoints.desktop}px) {
    ${content}
  }
`;

export const forDesktopLarge = content => `
  @media (min-width: ${breakpoints.desktopLarge}px) {
    ${content}
  }
`;
