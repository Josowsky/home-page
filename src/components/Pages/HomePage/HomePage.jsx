import React from 'react';
import { shape } from 'prop-types';

import { routes } from 'shared/constants/constants';

import SEO from 'components/SEO/SEO';
import Sidebar from 'components/Sidebar/Sidebar';
import { PageContent } from 'components/PageWrappers/PageWrappers';
import {
  StyledContainer,
  StyledAvatarContainer,
  StyledImage,
  StyledHeader,
  StyledButtons,
  StyledButton,
  StyledSidebar,
} from './HomePage.style';

const HomePage = ({ data }) => (
  <PageContent>
    <StyledContainer>
      <StyledSidebar>
        <Sidebar />
      </StyledSidebar>
      <StyledAvatarContainer>
        <StyledImage alt="My photo" fixed={data.file.childImageSharp.fixed} />
      </StyledAvatarContainer>
      <StyledHeader>
        Hello, my name is Bartek, I create modern web apps in JavaScript and I
        love what I do.
      </StyledHeader>
      <StyledButtons>
        <StyledButton label="About" to={routes.about} />
        <StyledButton label="Blog" to={routes.blog} />
      </StyledButtons>
      <SEO
        title="Bartek Józwowiak"
        description="I am a Web Developer with Frontend experience. Check out the about page to read more about my experience."
      />
    </StyledContainer>
  </PageContent>
);

HomePage.propTypes = {
  data: shape({
    file: shape({
      childImageSharp: shape({
        fixed: shape({}).isRequired,
      }).isRequired,
    }),
  }).isRequired,
};

export default HomePage;
