import styled from 'styled-components';
import Img from 'gatsby-image';
import Button from 'components/Button/Button';

import {
  colorBlue,
  colorGrey,
  grid,
  mobileBreakpoint,
} from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${mobileBreakpoint}px) {
    margin-top: 200px;
  }
`;

export const StyledAvatarContainer = styled.div`
  margin-bottom: ${grid * 1.5}px;

  @media (min-width: ${mobileBreakpoint}px) {
    display: none;
  }
`;

export const StyledImage = styled(Img)`
  border-radius: 50%;
  height: 110px;
  width: 110px;
  border: 1px solid ${colorBlue};
`;

export const StyledHeader = styled.h1`
  color: ${colorGrey};
  text-align: center;
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: stretch;
  margin-top: ${grid * 2}px;
  width: 100%;

  @media (min-width: ${mobileBreakpoint}px) {
    margin-top: ${grid * 3}px;
    width: 400px;
  }
`;

export const StyledButton = styled(Button)`
  flex: 1 1 0%;
  margin: ${grid}px;

  @media (min-width: ${mobileBreakpoint}px) {
    font-size: 18px;
  }
`;
