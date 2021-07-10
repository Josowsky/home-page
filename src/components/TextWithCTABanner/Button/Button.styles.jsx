import styled from 'styled-components';
import { darken } from 'polished';

import { gutter, colorWhite, colorRed } from 'shared/constants/constants.style';

export const StyledButton = styled.button`
  padding: ${gutter(2)};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${colorWhite};
  background-color: ${colorRed};
  border: none;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  cursor: pointer;
  transition: background-color 200ms;

  &:hover {
    background-color: ${darken(0.05, colorRed)};
  }
`;
