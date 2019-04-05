import React from 'react';

import { routes } from '../shared/constants';
import Button from '../components/Button/Button';

import styles from './about.module.scss';

const MainPage = () => (
  <div className={styles.container}>
    <h2 className={styles.header}>About me</h2>
    <div className={styles.paragraph}>
      Currently you can find me in Poznan, Poland where I work as a Frontend
      Developer at NetGuru. Since beginning of my journey I helped to build
      mutiple web applications for innovators and entrepreneurs from all over
      the world. I’ve had the pleasure to work with many talented people and
      great companies along the way.
    </div>
    <div className={styles.paragraph}>
      I enjoy web programming, learning new stuff and getting to know all the
      news from the JavaScript world. I belive that the best way to grow is by
      patience and consistency.
    </div>
    <div className={styles.paragraph}>
      In spare time I like to broaden my horizons by reading nonfiction books
      and traveling.
    </div>
    <div className={styles.buttons}>
      <Button
        className={styles.button}
        label="Portfolio"
        to={routes.portfolio}
      />
    </div>
  </div>
);

export default MainPage;
