import styled from 'styled-components';

import { grid, tabletBreakpoint } from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  padding: ${grid}px;
  background-color: #fff;

  @media (min-width: ${tabletBreakpoint}px) {
    width: calc(100% - 24px);
    min-height: calc(100vh - 24px);
    padding: ${grid * 2}px;
    margin: 12px;
    border-radius: 12px;
  }
`;
