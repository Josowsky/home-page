import styled from 'styled-components';

import {
  colorBlue,
  grid,
  mobileBreakpoint,
  tabletBreakpoint,
} from 'shared/constants/constants.style';

import Button from 'components/Button/Button';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 730px;
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: stretch;
  margin: ${grid * 2}px auto 0 auto;
  width: 60%;

  @media (min-width: ${mobileBreakpoint}px) {
    width: 200px;
  }
`;

export const StyledButton = styled(Button)`
  flex: 1 1 0%;
  margin: ${grid}px;
`;

export const StyledSidebar = styled.aside`
  display: none;

  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
    width: 465px;
    height: calc(100% - 56px);
    background-color: ${colorBlue};
    border-radius: 12px;
    flex-shrink: 0;
    overflow: hidden;
    position: fixed;
    top: 28px;
    left: 28px;
  }

  @media (min-width: ${tabletBreakpoint}px) {
    display: block;
    width: 465px;
    height: calc(100% - 56px);
    background-color: ${colorBlue};
    border-radius: 12px;
    flex-shrink: 0;
    overflow: hidden;
    position: fixed;
    top: 28px;
    left: 28px;
  }
`;
