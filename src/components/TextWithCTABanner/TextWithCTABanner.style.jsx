import styled from 'styled-components';
import { rgba } from 'polished';

import {
  colorBlue,
  colorDarkGrey,
  colorGrey,
  gutter,
} from 'shared/constants/constants.style';
import { forTablet } from 'shared/style-utils/mediaQueries';

export const StyledContainer = styled.section`
  width: 100%;
  background: ${rgba(colorBlue, 0.03)};
  padding: ${gutter(12)} 0;
`;

export const StyledHeader = styled.h2`
  font-size: 36px;
  font-weight: 700;
  font-family: 'Roboto Slab', serif;
  margin-bottom: ${gutter(2)};
  color: ${colorDarkGrey};
  text-align: center;

  ${forTablet(`
    text-align: left;
  `)}
`;

export const StyledText = styled.p`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  color: ${colorGrey};
  text-align: center;

  ${forTablet(`
    text-align: left;
  `)}
`;

export const StyledCTAContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
