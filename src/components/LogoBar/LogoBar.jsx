import React from 'react';
import PropTypes from 'prop-types';

import Logo from 'components/Logo/Logo';

import {
  StyledContainer,
  StyledLinksContainer,
  StyledLink,
} from './LogoBar.style';

const LogoBar = ({ links = [] }) => (
  <StyledContainer>
    <Logo />
    {links.length > 0 && (
      <StyledLinksContainer>
        {links.map(({ href, label }) => (
          <StyledLink key={label} {...{ href }}>
            {label}
          </StyledLink>
        ))}
      </StyledLinksContainer>
    )}
  </StyledContainer>
);

LogoBar.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

export default LogoBar;
