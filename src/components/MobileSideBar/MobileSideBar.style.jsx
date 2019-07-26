import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';

import {
  colorBlue,
  grid,
  tabletBreakpoint,
} from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  position: absolute;

  @media (min-width: ${tabletBreakpoint}px) {
    display: none;
  }
`;

export const StyledOpenButton = styled.div`
  position: fixed;
  top: ${grid * 1.5}px;
  left: ${grid * 1.5}px;
  font-size: 28px;
`;

export const StyledSidebarContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${colorBlue};
  will-change: transform;
  transform: ${props => (props.isMenuOpened ? 'none' : 'translate(-101%)')};
  transition: transform 0.2s cubic-bezier(0, 0, 0.3, 1);
`;

export const StyledBackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.1;
  pointer-events: none;
  height: 100vh;
  width: 100vw;
`;

export const StyledBackgroundImage = styled(BackgroundImage)`
  height: 100%;
`;

export const StyledCloseButton = styled.div`
  position: fixed;
  top: ${grid * 1.5}px;
  right: ${grid * 1.5}px;
  font-size: 28px;
`;

export const StyledContentContainer = styled.div`
  position: absolute;
  top: 250px;
  transform: translateY(-50%);
  margin-left: ${grid}px;
  color: #fff;
`;

export const StyledName = styled.div`
  font-size: 30px;
  font-weight: $font-weight-bold;
  margin-bottom: ${grid * 0.5}px;
`;

export const StyledTitle = styled.div`
  font-size: 24px;
`;

export const StyledMenuContainer = styled.div`
  margin-top: ${grid}px;
`;

export const StyledFameSection = styled.div`
  position: absolute;
  bottom: ${grid * 1.5}px;
  left: 50%;
  transform: translateX(-50%);
`;
