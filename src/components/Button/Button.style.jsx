import styled from 'styled-components';
import { Link } from 'gatsby';

import {
  colorBlue,
  fontWeightBold,
  grid,
} from 'shared/constants/constants.style';

export const StyledButton = styled(Link)`
  display: block;
  padding: ${grid}px;
  font-weight: ${fontWeightBold};
  text-align: center;
  border: 2px solid ${colorBlue};
  border-radius: 30px;
  color: ${colorBlue};
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: ${colorBlue};
    color: #fff;
  }
`;
