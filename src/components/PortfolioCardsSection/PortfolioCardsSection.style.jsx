import styled from 'styled-components';

import {
  gutter,
  colorDarkGrey,
  colorGrey,
} from 'shared/constants/constants.style';
import { forDesktop } from 'shared/style-utils/mediaQueries';

import { Cell } from 'components/Grid/Grid';

export const StyledPortfolioCardContainer = styled(Cell)`
  margin-bottom: ${gutter(4)};
`;

export const StyledTitle = styled.h2`
  font-family: 'Roboto Slab', serif;
  font-size: 36px;
  font-weight: 700;
  color: ${colorDarkGrey};
  margin-bottom: ${gutter(3)};
  text-align: center;

  ${forDesktop(`
    text-align: left;
  `)}
`;

export const StyledDescription = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: ${colorGrey};
  margin-bottom: ${gutter(4)};
  text-align: center;

  ${forDesktop(`
    text-align: left;
  `)}
`;
