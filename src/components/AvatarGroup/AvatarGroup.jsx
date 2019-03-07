import React from 'react';

import styles from './avatarGroup.module.css';

const AvatarGroup = () => (
  <div className={styles.container}>
    <div>Avatar</div>
    <div className={styles.name}>Bartek Józwowiak</div>
    <div className={styles.title}>Frontend Developer</div>
  </div>
);

export default AvatarGroup;
