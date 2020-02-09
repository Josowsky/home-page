import React from 'react';
import { shape } from 'prop-types';

import { routes } from 'shared/constants/constants';

import SEO from 'components/SEO/SEO';
import {
  StyledContainer,
  StyledAvatarContainer,
  StyledImage,
  StyledHeader,
  StyledButtons,
  StyledButton,
} from './HomePage.style';

const HomePage = ({ data }) => (
  <StyledContainer>
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
      description="I am a Web Developer with Frontend experience. Check out my portfolio to see projects that I worked on."
    />
  </StyledContainer>
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
