import styled from 'styled-components';

import {
  colorBlue,
  colorGrey,
  grid,
  tabletBreakpoint,
} from 'shared/constants/constants.style';

export const StyledDateContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-top: ${grid * 2}px;
  margin-bottom: ${grid};

  @media (min-width: ${tabletBreakpoint}px) {
    margin-bottom: ${grid * 1.5}px;
  }
`;

export const StyledDate = styled.div`
  color: ${colorBlue};
  font-size: 12px;
  margin-right: ${grid * 0.5}px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 16px;
    margin-right: ${grid}px;
  }
`;

export const StyledDateLine = styled.div`
  height: 1px;
  flex-grow: 1;
  background: ${colorGrey};
  opacity: 0.3;
`;

export const StyledBoxesContainer = styled.div`
  display: block;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 16px;
    display: flex;
  }
`;
