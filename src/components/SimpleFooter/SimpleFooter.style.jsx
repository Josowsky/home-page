import styled from 'styled-components';

import { colorBlue, grid } from 'shared/constants/constants.style';

export const StyledContainer = styled.footer`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: auto auto 0 auto;
`;

export const StyledTitle = styled.p`
  margin-right: ${grid * 1.5}px;
`;

export const StyledLink = styled.a`
  color: ${colorBlue};
  margin-right: ${grid}px;
`;
