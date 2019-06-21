import React from 'react';
import { Link } from '@reach/router';
import { shape } from 'prop-types';

import {
  StyledContainer,
  StyledInfoContainer,
  StyledHeader,
  StyledDescription,
  StyledAvatar,
} from './Bio.style';

const Bio = ({ avatar }) => (
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
    <StyledAvatar alt="My photo" fixed={avatar} />
  </StyledContainer>
);

Bio.propTypes = {
  avatar: shape({}).isRequired,
};

export default Bio;
