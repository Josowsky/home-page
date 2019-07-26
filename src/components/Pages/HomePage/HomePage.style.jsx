import styled from 'styled-components';
import Img from 'gatsby-image';

import {
  colorBlue,
  colorGrey,
  grid,
  tabletBreakpoint,
} from 'shared/constants/constants.style';

import Button from 'components/Button/Button';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${tabletBreakpoint}px) {
    margin-top: ${grid * 4}px;
  }
`;

export const StyledAvatarContainer = styled.div`
  margin-bottom: ${grid * 1.5}px;

  @media (min-width: ${tabletBreakpoint}px) {
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
  font-size: 24px;
  color: ${colorGrey};
  text-align: justify;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: stretch;
  margin-top: ${grid * 2}px;
  width: 100%;

  @media (min-width: ${tabletBreakpoint}px) {
    margin-top: ${grid * 3}px;
    width: 400px;
  }
`;

export const StyledButton = styled(Button)`
  flex: 1 1 0%;
  margin: ${grid / 2}px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 18px;
  }
`;