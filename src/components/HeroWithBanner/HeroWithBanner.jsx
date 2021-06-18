import React from 'react';

import { Cell } from 'components/Grid/Grid';

import {
  StyledContainer,
  StyledBanner,
  StyledTextContainer,
} from './HeroWithBanner.style';

const HeroWithBanner = () => (
  <StyledContainer>
    <Cell>
      <StyledBanner />
    </Cell>
    <Cell tablet={5}>
      <StyledTextContainer />
    </Cell>
    <Cell tablet={5}>
      <StyledTextContainer />
    </Cell>
  </StyledContainer>
);

export default HeroWithBanner;
