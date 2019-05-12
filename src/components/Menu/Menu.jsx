import React from 'react';
import { shape, string } from 'prop-types';
import { Location } from '@reach/router';

import { menuItems } from 'shared/constants';

import { StyledContainer, StyledMenuItem } from './Menu.style';

const Menu = ({ location: { pathname } }) => (
  <StyledContainer>
    {menuItems.map(({ id, path, label }) => (
      <StyledMenuItem key={id} to={path} isSelected={path === pathname}>
        {label}
      </StyledMenuItem>
    ))}
  </StyledContainer>
);

Menu.propTypes = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
};

export default props => (
  <Location>{locationProps => <Menu {...locationProps} {...props} />}</Location>
);
