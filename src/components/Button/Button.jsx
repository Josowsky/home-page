import React from 'react';
import { string } from 'prop-types';
import { Link } from 'gatsby';

import styles from './button.module.css';

const Button = ({ label, to }) => (
  <Link className={styles.button} to={to}>
    {label}
  </Link>
);

Button.propTypes = {
  label: string.isRequired,
  to: string.isRequired,
};

export default Button;
