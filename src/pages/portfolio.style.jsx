import styled from 'styled-components';

import { grid, mobileBreakpoint } from 'shared/constants';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledHeader = styled.h1`
  font-size: 24px;
  margin-top: ${grid * 4}px;
  margin-bottom: ${grid}px;

  @media (min-width: ${mobileBreakpoint}px) {
    font-size: 32px;
  }
`;

export const StyledSubheader = styled.h2`
  font-size: 16px;
  margin-bottom: ${grid * 2}px;

  @media (min-width: ${mobileBreakpoint}px) {
    font-size: 24px;
    margin-bottom: ${grid * 4}px;
  }
`;
