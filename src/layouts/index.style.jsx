import styled from 'styled-components';

import {
  colorBlue,
  grid,
  mobileBreakpoint,
} from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: ${grid}px;
  background-color: #fff;

  @media (min-width: ${mobileBreakpoint}px) {
    width: calc(100% - 24px);
    min-height: calc(100vh - 24px);
    padding: ${grid * 2}px;
    margin: 12px;
    border-radius: 12px;
  }
`;

export const StyledMenu = styled.div`
  display: none;

  @media (min-width: ${mobileBreakpoint}px) {
    display: block;
    position: absolute;
    top: 30px;
    right: 42px;
  }
`;

export const StyledSidebar = styled.aside`
  display: none;

  @media (min-width: ${mobileBreakpoint}px) {
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

export const StyledPageContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: ${grid * 3}px 0 ${grid}px 0;

  @media (min-width: ${mobileBreakpoint}px) {
    margin: 80px 22px 28px 545px;
  }
`;

export const StyledBlogContent = styled.main`
  width: 600px;
  margin: ${grid * 3}px auto ${grid}px auto;
`;
