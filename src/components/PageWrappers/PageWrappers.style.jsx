import styled from 'styled-components';

import {
  grid,
  tabletBreakpoint,
  mobileBreakpoint,
} from 'shared/constants/constants.style';

export const StyledPageContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  /* grid * 4 shows content below menu icon */
  margin-top: ${grid * 4}px;

  @media (min-width: ${tabletBreakpoint}px) {
    margin: ${grid}px ${grid}px ${grid}px ${449 + grid * 6}px;
  }
`;

export const StyledBlogContent = styled.main`
  max-width: 600px;
  width: 100%;
  margin: ${grid}px auto ${grid * 2}px auto;

  @media (min-width: ${mobileBreakpoint}px) {
    margin: ${grid * 3}px auto ${grid * 2}px auto;
  }
`;

export const StyledMenu = styled.div`
  display: none;

  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 42px;
  }
`;
