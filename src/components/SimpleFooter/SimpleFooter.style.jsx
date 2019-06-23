import styled from 'styled-components';

import { colorBlue, grid } from 'shared/constants/constants.style';

export const StyledContainer = styled.footer`
  position: absolute;
  bottom: ${grid * 2}px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledTitle = styled.p`
  margin-right: ${grid * 1.5}px;
`;

export const StyledLink = styled.a`
  color: ${colorBlue};
  margin-right: ${grid}px;
`;
