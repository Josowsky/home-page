import styled from 'styled-components';

import { Heading, Paragraph } from 'components/Typography/Typography';
import {
  colorBlue,
  colorGrey,
  fontWeightBold,
  grid,
} from 'shared/constants/constants.style';

export const StyledContainer = styled.article`
  padding: ${grid}px;
  border-bottom: 1px rgba(119, 119, 119, 0.2) solid;

  &:not(:last-child) {
    margin-bottom: ${grid * 2}px;
  }
`;

export const StyledHeader = styled.header`
  margin-bottom: ${grid}px;
`;

export const StyledTitle = styled(Heading)`
  color: ${colorBlue};
  margin: 0 0 ${grid}px;
  font-weight: ${fontWeightBold};
`;

export const StyledSmallDescription = styled(Paragraph)`
  color: ${colorGrey};
  opacity: 0.6;
`;

export const StyledDescription = styled(Paragraph)`
  color: ${colorGrey};
  margin: 0;
`;
