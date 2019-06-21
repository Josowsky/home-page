import styled from 'styled-components';

import { colorBlue, colorGrey, fontWeightBold, grid } from 'shared/constants';

export const StyledContainer = styled.article`
  padding: ${grid * 2}px;
  border: 1px rgba(119, 119, 119, 0.2) solid;
  box-shadow: 0 4px 4px rgba(119, 119, 119, 0.15);
  border-radius: 12px;
  margin-bottom: ${grid * 2.5}px;
`;

export const StyledHeader = styled.header`
  margin-bottom: ${grid * 2}px;
`;

export const StyledTitle = styled.h2`
  color: ${colorBlue};
  margin: 0 0 ${grid}px;
  font-weight: ${fontWeightBold};
`;

export const StyledSmallDescription = styled.p`
  color: ${colorGrey};
  opacity: 0.6;
`;

export const StyledDescription = styled.p`
  color: ${colorGrey};
`;
