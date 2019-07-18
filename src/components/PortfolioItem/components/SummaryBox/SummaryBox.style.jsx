import styled from 'styled-components';

import {
  colorBlue,
  fontWeightBold,
  grid,
  mobileBreakpoint,
} from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  padding: ${grid * 1.5}px;
  border: 1px rgba(119, 119, 119, 0.2) solid;
  box-shadow: 0 4px 4px rgba(119, 119, 119, 0.15);
  border-radius: 12px;
  margin-bottom: ${grid}px;

  @media (min-width: ${mobileBreakpoint}px) {
    padding: ${grid * 2}px;
    flex-grow: 1;
    flex-shrink: 1;
    margin-right: ${grid}px;
    margin-bottom: 0;
  }
`;

export const StyledHeader = styled.h2`
  font-size: 16px;
  font-weight: ${fontWeightBold};
  margin-bottom: ${grid}px;

  @media (min-width: ${mobileBreakpoint}px) {
    font-size: 24px;
  }
`;

export const StyledDescription = styled.div`
  font-size: 14px;
  margin-bottom: ${grid * 1.5}px;

  @media (min-width: ${mobileBreakpoint}px) {
    font-size: 16px;
  }
`;

export const StyledTechStackContainer = styled.div`
  font-size: 14px;

  @media (min-width: ${mobileBreakpoint}px) {
    font-size: 16px;
  }
`;

export const StyledTechStackHeader = styled.div`
  color: ${colorBlue};
  margin-bottom: ${grid}px;
`;
