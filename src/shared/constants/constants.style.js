export const colorWhite = '#fff';
export const colorBlue = '#00acc9';
export const colorRed = '#C93900';
export const colorGrey = '#777';
export const colorGreyLight = 'rgba(255, 255, 255, 0.6)';
export const colorDarkGrey = '#535050';

export const fontWeightNormal = '300';
export const fontWeightBold = '600';

// TODO: The `grid` constant should be replaced with the `gutter`
export const grid = 16;
export const gutter = (multiplier = 1, isNumber) =>
  isNumber ? multiplier * 8 : `${multiplier * 8}px`;

export const mobileBreakpoint = 500;
export const tabletBreakpoint = 900;
