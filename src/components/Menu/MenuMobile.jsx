import React from 'react';
import { shape, string } from 'prop-types';
import cx from 'classnames';
import { Link } from 'gatsby';
import { Location } from '@reach/router';

import MENU_ITEMS from './menu.constants';

import styles from './menuMobile.module.scss';

const MenuMobile = ({ location: { pathname } }) => (
  <div className={styles.container}>
    {MENU_ITEMS.map(({ id, path, label }) => {
      const isSelected = path === pathname;

      return (
        <Link
          key={id}
          to={path}
          className={cx(styles.menuItem, isSelected && styles.menuItemSelected)}
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
};

export default props => (
  <Location>
    {locationProps => <MenuMobile {...locationProps} {...props} />}
  </Location>
);