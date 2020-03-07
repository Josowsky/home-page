import React from 'react';

import AvatarGroup from 'components/AvatarGroup/AvatarGroup';
import CreditsSection from 'components/CreditsSection/CreditsSection';
import FameSection from 'components/FameSection/FameSection';

import {
  StyledContainer,
  StyledBackgroundContainer,
  StyledFameSection,
  StyledAvatarGroup,
  StyledFooter,
} from './Sidebar.style';

const Sidebar = () => (
  <StyledContainer>
    <StyledBackgroundContainer />
    <StyledFameSection>
      <FameSection />
    </StyledFameSection>
    <StyledAvatarGroup>
      <AvatarGroup />
    </StyledAvatarGroup>
    <StyledFooter>
      <CreditsSection />
    </StyledFooter>
  </StyledContainer>
);

export default Sidebar;
