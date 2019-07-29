import React from 'react';
import { arrayOf, string } from 'prop-types';

import {
  StyledContainer,
  StyledHeader,
  StyledDescription,
  StyledTechStackContainer,
  StyledTechStackHeader,
} from './SummaryBox.style';

const SummaryBox = ({ projectDescription, projectName, projectTechStack }) => (
  <StyledContainer>
    <StyledHeader>{projectName}</StyledHeader>
    <StyledDescription>{projectDescription}</StyledDescription>
    <StyledTechStackContainer>
      <StyledTechStackHeader>I worked with:</StyledTechStackHeader>
      <div>{projectTechStack}</div>
    </StyledTechStackContainer>
  </StyledContainer>
);

SummaryBox.propTypes = {
  projectDescription: string.isRequired,
  projectName: string.isRequired,
  projectTechStack: arrayOf(string).isRequired,
};

export default SummaryBox;
