import styled from 'styled-components';

import { grid } from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: ${grid}px ${grid * 1.5}px;
`;

export const StyledBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.1;
  pointer-events: none;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url('sidebar.png');
`;

export const StyledFameSection = styled.div`
  margin-top: ${grid * 4}px;
`;

export const StyledAvatarGroup = styled.div`
  margin: auto;
`;

export const StyledFooter = styled.div`
  margin-top: auto;
  width: 100%;
`;
