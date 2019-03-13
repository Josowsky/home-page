import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import Menu from '../components/Menu/Menu';
import Sidebar from '../components/Sidebar/Sidebar';

import styles from './layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <div className={styles.menu}>
      <Menu />
    </div>
    <div className={styles.sidebar}>
      <Sidebar />
    </div>
    <div className={styles.content}>{children}</div>
  </div>
);

Layout.propTypes = {
  children: oneOfType([func, node]),
};

export default Layout;
