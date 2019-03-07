import React from 'react';
import { FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

import AvatarGroup from '../AvatarGroup/AvatarGroup';
import CreditsSection from '../CreditsSection/CreditsSection';
import FameSection from '../FameSection/FameSection';

import styles from './sidebar.module.css';

const icons = [
  {
    image: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/bartosz-j%C3%B3zwowiak-46173a114/',
  },
  {
    image: <FaRegEnvelope />,
    link: 'mailto:bartosz@jozwowiak.pl',
  },
];

const Sidebar = () => (
  <div className={styles.sidebar}>
    <div className={styles.fameSection}>
      <FameSection icons={icons} />
    </div>
    <div className={styles.avatarGroup}>
      <AvatarGroup />
    </div>
    <div className={styles.sidebarFooter}>
      <CreditsSection />
    </div>
  </div>
);

export default Sidebar;
