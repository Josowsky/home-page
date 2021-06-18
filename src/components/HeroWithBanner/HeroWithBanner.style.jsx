import styled from 'styled-components';

import { gutter } from 'shared/constants/constants.style';

import Grid from 'components/Grid/Grid';

export const StyledContainer = styled(Grid)``;

export const StyledBanner = styled.div`
  background: red;
  margin-bottom: ${gutter(8)};
  border-radius: 10px;
  height: 430px;
`;

export const StyledTextContainer = styled.div`
  height: 260px;
  background: green;
`;
