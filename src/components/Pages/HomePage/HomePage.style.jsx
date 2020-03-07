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
  flex-grow: 1;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${grid}px;
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

export const StyledPageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${tabletBreakpoint}px) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledHeader = styled.h1`
  font-size: 21px;
  color: ${colorGrey};
  text-align: center;
  padding: 0 ${grid}px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 32px;
    text-align: center;
    padding: 0;
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
