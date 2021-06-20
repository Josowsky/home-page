import React from 'react';

import PageSection from 'components/PageSection/PageSection';

import HeroWithBanner from './HeroWithBanner';
import { StyledContainer } from './HeroWithBanner.stories.style';

export default {
  title: 'HeroWithBanner',
  component: HeroWithBanner,
};

export const Default = () => (
  <StyledContainer>
    <PageSection>
      <HeroWithBanner />
    </PageSection>
  </StyledContainer>
);
