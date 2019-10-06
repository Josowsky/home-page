import React from 'react';
import { func, shape, string } from 'prop-types';
import { Location } from '@reach/router';

import { menuItems } from 'shared/constants/constants';
import { arePathsEqual } from 'shared/utils/arePathsEqual';

import { StyledContainer, StyledMenuItem } from './MenuMobile.style';

const MenuMobile = ({ location: { pathname }, onClick = () => null }) => (
  <StyledContainer>
    {menuItems.map(({ id, path, label }) => (
      <StyledMenuItem
        key={id}
        to={path}
        isSelected={arePathsEqual(path, pathname)}
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
