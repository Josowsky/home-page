import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import SEO from 'components/SEO/SEO';

import { routes } from 'shared/constants/constants';

import {
  StyledContainer,
  StyledAvatarContainer,
  StyledImage,
  StyledHeader,
  StyledButtons,
  StyledButton,
} from './index.style';

const MainPage = ({ data }) => (
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
      <StyledButton label="Portfolio" to={routes.portfolio} />
    </StyledButtons>
    <SEO
      title="Bartek Józwowiak"
      description="I am a Web Developer with Frontend experience. Check out my portfolio to see projects that I worked on."
    />
  </StyledContainer>
);

MainPage.propTypes = {
  data: shape({
    file: shape({
      childImageSharp: shape({
        fixed: shape({}).isRequired,
      }).isRequired,
    }),
  }).isRequired,
};

export const query = graphql`
  query {
    file(absolutePath: { regex: "/avatar/" }) {
      childImageSharp {
        fixed(height: 110, width: 110) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default MainPage;
