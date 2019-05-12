import styled from 'styled-components';
import Img from 'gatsby-image';

import { mobileBreakpoint } from 'shared/constants';

export const StyledContainer = styled.div`
  border: 1px rgba(119, 119, 119, 0.2) solid;
  box-shadow: 0 4px 4px rgba(119, 119, 119, 0.15);
  border-radius: 12px;
  flex-basis: 320px;
  height: 230px;
  overflow: hidden;
  text-align: center;
  flex-shrink: 0;

  @media (min-width: ${mobileBreakpoint}px) {
    flex-basis: 420px;
    height: 300px;
  }
`;

export const StyledImage = styled(Img)`
  height: 100%;
`;
