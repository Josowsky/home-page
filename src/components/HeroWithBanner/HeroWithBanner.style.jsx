import styled from 'styled-components';

import { gutter, colorGrey } from 'shared/constants/constants.style';

import Grid from 'components/Grid/Grid';

export const StyledContainer = styled(Grid)``;

export const StyledBanner = styled.img`
  margin-bottom: ${gutter(8)};
  border-radius: 10px;
  width: 100%;
`;

export const StyledTextContainer = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: ${colorGrey};
`;
