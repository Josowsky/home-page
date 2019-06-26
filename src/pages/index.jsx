import React from 'react';
import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

import { routes } from 'shared/constants/constants';
import {
  colorBlue,
  colorGrey,
  grid,
  tabletBreakpoint,
} from 'shared/constants/constants.style';

import Button from 'components/Button/Button';
import SEO from 'components/SEO/SEO';

const StyledContainer = styled.div`
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${tabletBreakpoint}px) {
    margin-top: 200px;
  }
`;

const StyledAvatarContainer = styled.div`
  margin-bottom: ${grid * 1.5}px;

  @media (min-width: ${tabletBreakpoint}px) {
    display: none;
  }
`;

const StyledImage = styled(Img)`
  border-radius: 50%;
  height: 110px;
  width: 110px;
  border: 1px solid ${colorBlue};
`;

const StyledHeader = styled.h1`
  font-size: 24px;
  color: ${colorGrey};
  text-align: justify;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 32px;
    text-align: center;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: stretch;
  margin-top: ${grid * 2}px;
  width: 100%;

  @media (min-width: ${tabletBreakpoint}px) {
    margin-top: ${grid * 3}px;
    width: 400px;
  }
`;

const StyledButton = styled(Button)`
  flex: 1 1 0%;
  margin: ${grid}px;

  @media (min-width: ${tabletBreakpoint}px) {
    font-size: 18px;
  }
`;

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
