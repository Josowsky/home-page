import React from 'react';
import { func, shape, string } from 'prop-types';
import noop from 'lodash.noop';
import { Location } from '@reach/router';

import { menuItems } from 'shared/constants';

import { StyledContainer, StyledMenuItem } from './MenuMobile.style';

const MenuMobile = ({ location: { pathname }, onClick = noop }) => (
  <StyledContainer>
    {menuItems.map(({ id, path, label }) => (
      <StyledMenuItem
        key={id}
        to={path}
        isSelected={path === pathname}
        onClick={onClick}
      >
        {label}
      </StyledMenuItem>
    ))}
  </StyledContainer>
);

MenuMobile.propTypes = {
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
  onClick: func,
};

export default props => (
  <Location>
    {locationProps => <MenuMobile {...locationProps} {...props} />}
  </Location>
);
