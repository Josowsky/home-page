import styled from 'styled-components';

import { grid, mobileBreakpoint } from 'shared/constants';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const StyledHeader = styled.h1`
  margin-top: ${grid * 4}px;
  margin-bottom: ${grid}px;
`;

export const StyledSubheader = styled.h2`
  margin-bottom: ${grid * 2}px;

  @media (min-width: ${mobileBreakpoint}px) {
    margin-bottom: ${grid * 4}px;
  }
`;
