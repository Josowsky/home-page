import styled from 'styled-components';

import { gutter } from 'shared/constants/constants.style';
import {
  forTablet,
  forDesktop,
  forDesktopLarge,
} from 'shared/style-utils/mediaQueries';

const getCellWidth = (columns = 12) => (columns * 100) / 12;

export const StyledContainer = styled.div`
  flex-basis: 100%;
  min-width: 100%;
  ${({ mobile, tablet, desktop, desktopLarge }) => {
    let cssString = '';

    if (mobile > -1) {
      cssString += `
        flex-basis: ${getCellWidth(mobile)}%;
        min-width: ${getCellWidth(mobile)}%;
      `;
    }

    if (tablet > -1) {
      cssString += forTablet(`
        flex-basis: ${getCellWidth(tablet)}%;
        min-width: ${getCellWidth(tablet)}%;
      `);
    }

    if (desktop > -1) {
      cssString += forDesktop(`
        flex-basis: ${getCellWidth(desktop)}%;
        min-width: ${getCellWidth(desktop)}%;
      `);
    }

    if (desktopLarge > -1) {
      cssString += forDesktopLarge(`
        flex-basis: ${getCellWidth(desktopLarge)}%;
        min-width: ${getCellWidth(desktopLarge)}%;
      `);
    }

    return cssString;
  }}
  ${({ mobileOffset, tabletOffset, desktopOffset, desktopLargeOffset }) => {
    let cssString = '';

    if (mobileOffset > -1) {
      cssString += `
        margin-left: ${getCellWidth(mobileOffset)}%;
      `;
    }

    if (tabletOffset > -1) {
      cssString += forTablet(`
        margin-left: ${getCellWidth(tabletOffset)}%;
      `);
    }

    if (desktopOffset > -1) {
      cssString += forDesktop(`
        margin-left: ${getCellWidth(desktopOffset)}%;
      `);
    }

    if (desktopLargeOffset > -1) {
      cssString += forDesktopLarge(`
        margin-left: ${getCellWidth(desktopLargeOffset)}%;
      `);
    }

    return cssString;
  }}
  flex-grow: 0;
  flex-shrink: 0;
  padding: ${gutter()};
`;
