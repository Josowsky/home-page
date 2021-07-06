import React from 'react';

import PageSection from 'components/PageSection/PageSection';

import TextWithCTABanner from './TextWithCTABanner';
import { StyledContainer } from './TextWithCTABanner.stories.style';

export default {
  title: 'NewHomePage/TextWithCTABanner',
  component: TextWithCTABanner,
};

export const Default = () => (
  <StyledContainer>
    <PageSection>
      <TextWithCTABanner />
    </PageSection>
  </StyledContainer>
);
