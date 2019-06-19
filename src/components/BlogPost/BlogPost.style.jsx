import styled from 'styled-components';

import { grid, fontWeightBold } from 'shared/constants';

export const StyledHeader = styled.header`
  margin-bottom: ${grid * 4}px;
`;

export const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: ${fontWeightBold};
  margin-bottom: ${grid}px;
`;

export const StyledDescription = styled.p`
  font-size: 16px;
`;
