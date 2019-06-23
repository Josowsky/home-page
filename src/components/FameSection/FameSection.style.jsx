import styled from 'styled-components';

import {
  colorBlue,
  colorGreyLight,
  grid,
} from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled.a`
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colorGreyLight};
  border-radius: 50%;
  color: #fff;
  font-size: 26px;
  margin: ${grid}px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: ${colorBlue};
  }
`;

export const StyledDot = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 4px;
  height: 4px;
`;
