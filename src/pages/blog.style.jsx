import styled from 'styled-components';

import { grid, mobileBreakpoint } from 'shared/constants';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 730px;
`;

export const StyledHeader = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin-top: ${grid * 3}px;
  margin-bottom: ${grid * 2}px;

  @media (min-width: ${mobileBreakpoint}px) {
    margin-top: ${grid * 6}px;
    font-size: 32px;
  }
`;
