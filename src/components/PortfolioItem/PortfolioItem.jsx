import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import ImageBox from './components/ImageBox/ImageBox';
import SummaryBox from './components/SummaryBox/SummaryBox';

import styles from './portfolioItem.module.scss';

const PortfolioItem = ({
  project: { date, description, image, name, techStack },
}) => (
  <div>
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
      <ImageBox projectName={name} projectImage={image} />
    </div>
  </div>
);

PortfolioItem.propTypes = {
  project: shape({
    date: string.isRequired,
    description: string.isRequired,
    image: shape({}).isRequired,
    name: string.isRequired,
    techStack: arrayOf(string).isRequired,
  }).isRequired,
};

export default PortfolioItem;
