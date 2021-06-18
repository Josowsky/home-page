import styled, { css } from 'styled-components';

import { grid } from 'shared/constants/constants.style';

import { forTablet, forDesktop, forDesktopLarge } from './mediaQueries';

const getCellWidth = (columns = 12) => (columns * 100) / 12;

export const StyledContainer = styled.div`
  flex-basis: 100%;
  min-width: 100%;
  ${({ mobile, tablet, desktop, desktopLarge }) => {
    if (desktopLarge) {
      return forDesktopLarge(`
        flex-basis: ${getCellWidth(desktopLarge)}%;
        min-width: ${getCellWidth(desktopLarge)}%;
      `);
    }

    if (desktop) {
      return forDesktop(`
        flex-basis: ${getCellWidth(desktop)}%;
        min-width: ${getCellWidth(desktop)}%;
      `);
    }

    if (tablet) {
      return forTablet(`
        flex-basis: ${getCellWidth(tablet)}%;
        min-width: ${getCellWidth(tablet)}%;
      `);
    }

    if (mobile) {
      return css`
        flex-basis: ${getCellWidth(mobile)}%;
        min-width: ${getCellWidth(mobile)}%;
      `;
    }
  }}
  flex-grow: 0;
  flex-shrink: 0;
  padding: ${grid / 2}px;
`;
