import styled from 'styled-components';

import { grid, mobileBreakpoint } from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 730px;
  margin-bottom: ${grid * 2}px;
`;

export const StyledBioContainer = styled.div`
  margin-bottom: ${grid * 3}px;
  width: 100%;
  display: flex;
  justify-content: center;

  @media (min-width: ${mobileBreakpoint}px) {
    margin-bottom: ${grid * 5}px;
  }
`;
