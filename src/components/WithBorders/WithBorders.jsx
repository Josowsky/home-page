import React, { Fragment } from 'react';
import { func, oneOfType, node } from 'prop-types';
import cx from 'classnames';

import styles from './withBorders.module.scss';

const WithBorders = ({ children }) => (
  <Fragment>
    <div className={cx(styles.border, styles.borderTop)} />
    <div className={cx(styles.border, styles.borderRight)} />
    <div className={cx(styles.border, styles.borderBottom)} />
    <div className={cx(styles.border, styles.borderLeft)} />
    {children}
  </Fragment>
);

WithBorders.propTypes = {
  children: oneOfType([func, node]).isRequired,
};

export default WithBorders;
