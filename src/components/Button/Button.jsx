import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import { Link } from 'gatsby';

import styles from './button.module.scss';

const Button = ({ className = '', label, to }) => (
  <Link className={cx(styles.button, className)} to={to}>
    {label}
  </Link>
);

Button.propTypes = {
  className: string.isRequired,
  label: string.isRequired,
  to: string.isRequired,
};

export default Button;
