import React from 'react';
import { func, shape, string } from 'prop-types';
import cx from 'classnames';
import noop from 'lodash.noop';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

import MENU_ITEMS from './menu.constants';

import styles from './menuMobile.module.scss';

const MenuMobile = ({ location: { pathname }, onClick = noop }) => (
  <div className={styles.container}>
    {MENU_ITEMS.map(({ id, path, label }) => {
      const isSelected = path === pathname;

      return (
        <Link
          key={id}
          to={path}
          className={cx(styles.menuItem, isSelected && styles.menuItemSelected)}
          onClick={onClick}
        >
          {label}
        </Link>
      );
    })}
  </div>
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
