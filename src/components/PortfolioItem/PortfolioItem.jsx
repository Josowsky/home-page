import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import ImageBox from './components/ImageBox/ImageBox';
import SummaryBox from './components/SummaryBox/SummaryBox';

import {
  StyledDateContainer,
  StyledDate,
  StyledDateLine,
  StyledBoxesContainer,
} from './PortfolioItem.style';

const PortfolioItem = ({
  project: { date, description, image, name, techStack },
}) => (
  <div>
    <StyledDateContainer>
      <StyledDate>{date}</StyledDate>
      <StyledDateLine />
    </StyledDateContainer>
    <StyledBoxesContainer>
      <SummaryBox
        projectDescription={description}
        projectName={name}
        projectTechStack={techStack}
      />
      <ImageBox projectName={name} projectImage={image} />
    </StyledBoxesContainer>
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
