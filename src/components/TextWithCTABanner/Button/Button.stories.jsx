import React from 'react';

import Button from './Button';
import { StyledContainer } from './Button.stories.style';

export default {
  title: 'NewHomePage/Button',
  component: Button,
};

export const Default = () => (
  <StyledContainer>
    <Button>Some button</Button>
  </StyledContainer>
);
