import React from 'react';
import { func, node, oneOf, oneOfType } from 'prop-types';
import cx from 'classnames';

import styles from './CircleIcon.module.scss';

const CircleIcon = ({ children, variant = 'blue' }) => (
  <div className={cx(styles.icon, { [styles.iconWhite]: variant === 'white' })}>
    {children}
  </div>
);

CircleIcon.propTypes = {
  children: oneOfType([func, node]).isRequired,
  variant: oneOf(['blue, white']),
};

export default CircleIcon;
