import React from 'react';
import { oneOf } from 'prop-types';
import { Link } from '@reach/router';
import { graphql, StaticQuery } from 'gatsby';

import { routes } from 'shared/constants/constants';

import BioLink from './BioLink/BioLink';

import {
  StyledContainer,
  StyledInfoContainer,
  StyledHeader,
  StyledDescription,
  StyledAvatar,
} from './Bio.style';

const Bio = ({ variant = 'default' }) => (
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
          {variant === 'default' && <StyledHeader>Blog</StyledHeader>}
          {variant === 'withLink' && (
            <BioLink title="Blog" path={routes.blog}>
              Blog
            </BioLink>
          )}
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

Bio.propTypes = {
  variant: oneOf(['default', 'withLink']),
};

export default Bio;
