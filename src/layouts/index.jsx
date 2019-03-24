import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import Menu from '../components/Menu/Menu';
import Sidebar from '../components/Sidebar/Sidebar';
import WithBorders from '../components/WithBorders/WithBorders';

import styles from './layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <WithBorders>
      <div className={styles.menu}>
        <Menu />
      </div>
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>
      <div className={styles.content}>{children}</div>
    </WithBorders>
  </div>
);

Layout.propTypes = {
  children: oneOfType([func, node]),
};

export default Layout;
