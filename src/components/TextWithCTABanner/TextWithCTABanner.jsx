import React from 'react';

import Grid, { Cell } from 'components/Grid/Grid';
import Button from './Button/Button';

import {
  StyledContainer,
  StyledHeader,
  StyledText,
  StyledCTAContainer,
} from './TextWithCTABanner.style';

const TextWithCTABanner = () => (
  <StyledContainer>
    <Grid>
      <Cell tablet={6} tabletOffset={1} desktop={5} desktopOffset={2}>
        <StyledHeader>I learn by writing</StyledHeader>
        <StyledText>
          One of the best ways to get a better understanding of a topic is to
          pass your knowledge to others. Thats why I like to blog from time to
          time.
        </StyledText>
      </Cell>
      <Cell tablet={3} desktop={2} tabletOffset={1}>
        <StyledCTAContainer>
          <Button>Blog</Button>
        </StyledCTAContainer>
      </Cell>
    </Grid>
  </StyledContainer>
);

export default TextWithCTABanner;
