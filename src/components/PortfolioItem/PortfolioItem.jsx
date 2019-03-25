import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import ImageBox from './components/ImageBox/ImageBox';
import SummaryBox from './components/SummaryBox/SummaryBox';

import styles from './portfolioItem.module.scss';

const PortfolioItem = ({ project: { date, description, name, techStack } }) => (
  <div className={styles.container}>
    <div className={styles.headline}>
      <div className={styles.projectDate}>{date}</div>
      <div className={styles.headlineLine} />
    </div>
    <div className={styles.boxesContainer}>
      <SummaryBox
        projectDescription={description}
        projectName={name}
        projectTechStack={techStack}
      />
      <ImageBox
        projectName={name}
        projectImageUrl="https://images.pexels.com/photos/163125/board-printed-circuit-board-computer-electronics-163125.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
      />
    </div>
  </div>
);

PortfolioItem.propTypes = {
  project: shape({
    date: string,
    description: string,
    name: string,
    techStack: arrayOf(string),
  }),
};

export default PortfolioItem;
