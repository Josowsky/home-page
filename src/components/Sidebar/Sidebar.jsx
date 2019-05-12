import React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import AvatarGroup from 'components/AvatarGroup/AvatarGroup';
import CreditsSection from 'components/CreditsSection/CreditsSection';
import FameSection from 'components/FameSection/FameSection';

import {
  StyledContainer,
  StyledBackgroundContainer,
  StyledBackgroundImage,
  StyledFameSection,
  StyledAvatarGroup,
  StyledFooter,
} from './Sidebar.style';

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query {
        file(absolutePath: { regex: "/sidebar/" }) {
          childImageSharp {
            fluid(maxWidth: 465) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <StyledContainer>
        <StyledBackgroundContainer>
          <StyledBackgroundImage
            fluid={data.file.childImageSharp.fluid}
            alt="Sidebar background image"
          />
        </StyledBackgroundContainer>

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
    )}
  />
);

export default Sidebar;
