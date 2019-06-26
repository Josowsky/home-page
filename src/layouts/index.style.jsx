import styled from 'styled-components';

import { colorBlue, grid, tabletBreakpoint } from 'shared/constants';

export const StyledContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: ${grid}px;
  background-color: #fff;

  @media (min-width: ${tabletBreakpoint}px) {
    width: calc(100% - 24px);
    height: calc(100vh - 24px);
    padding: ${grid * 2}px;
    margin: 12px;
    border-radius: 12px;
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

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${grid * 3}px 0 ${grid}px 0;

  @media (min-width: ${tabletBreakpoint}px) {
    margin: 80px 22px 28px 545px;
  }
`;
