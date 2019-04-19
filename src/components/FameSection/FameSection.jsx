import React, { Fragment } from 'react';
import { FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

import styles from './fameSection.module.scss';

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

const FameSection = () => (
  <div className={styles.container}>
    {icons.map((icon, index) => (
      <Fragment>
        {index > 0 && <div key={index} className={styles.dot} />}
        <a key={index} className={styles.icon} href={icon.link}>
          {icon.image}
        </a>
      </Fragment>
    ))}
  </div>
);

export default FameSection;
