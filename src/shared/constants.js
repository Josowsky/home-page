// TODO: Keep styles constants and rest separately

export const routes = {
  home: '/',
  about: '/about',
  portfolio: '/portfolio',
};

export const menuItems = [
  {
    id: 1,
    path: routes.home,
    label: 'Home',
  },
  {
    id: 2,
    path: routes.about,
    label: 'About',
  },
  {
    id: 3,
    path: routes.portfolio,
    label: 'Portfolio',
  },
];

// Styles
export const colorBlue = '#00acc9';
export const colorGrey = '#777';
export const colorGreyLight = 'rgba(255, 255, 255, 0.6)';

export const fontWeightNormal = '300';
export const fontWeightBold = '600';

export const grid = 16;

export const mobileBreakpoint = 500;
export const tabletBreakpoint = 900;
