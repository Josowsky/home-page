import React from 'react';
import { Link } from '@reach/router';
import { graphql, StaticQuery } from 'gatsby';

import {
  StyledContainer,
  StyledInfoContainer,
  StyledHeader,
  StyledDescription,
  StyledAvatar,
} from './Bio.style';

const Bio = () => (
  <StaticQuery
    query={graphql`
      query {
        file(absolutePath: { regex: "/avatar/" }) {
          childImageSharp {
            fixed(height: 90, width: 90) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={({
      file: {
        childImageSharp: { fixed },
      },
    }) => (
      <StyledContainer>
        <StyledInfoContainer>
          <StyledHeader>Blog</StyledHeader>
          <StyledDescription>
            Personal blog by{' '}
            <Link to="/" title="Home page">
              Bartek Józwowiak
            </Link>
            . I write mostly about new frontend tools and React related stuff.
          </StyledDescription>
        </StyledInfoContainer>
        <StyledAvatar alt="My photo" fixed={fixed} />
      </StyledContainer>
    )}
  />
);

export default Bio;
