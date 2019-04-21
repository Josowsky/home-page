import React, { Fragment } from 'react';
import { FaLinkedinIn, FaRegEnvelope } from 'react-icons/fa';

import styles from './fameSection.module.scss';

const icons = [
  {
    id: 1,
    image: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/bartosz-j%C3%B3zwowiak-46173a114/',
  },
  {
    id: 2,
    image: <FaRegEnvelope />,
    link: 'mailto:bartosz@jozwowiak.pl',
  },
];

const FameSection = () => (
  <div className={styles.container}>
    {icons.map((icon, index) => (
      <Fragment key={icon.id}>
        {index > 0 && <div className={styles.dot} />}
        <a className={styles.icon} href={icon.link}>
          {icon.image}
        </a>
      </Fragment>
    ))}
  </div>
);

export default FameSection;
