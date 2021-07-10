import React from 'react';
import { arrayOf, shape, string } from 'prop-types';

import Grid, { Cell } from 'components/Grid/Grid';

import PortfolioCard from './PortfolioCard/PortfolioCard';

import {
  StyledPortfolioCardContainer,
  StyledTitle,
  StyledDescription,
} from './PortfolioCardsSection.style';

const isIndexEven = index => (index + 1) % 2 === 0;

const PortfolioCardsSection = ({ title, description, items }) => (
  <>
    <Grid>
      <Cell tabletOffset={1} tablet={10} desktopOffset={1} desktop={6}>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
      </Cell>
    </Grid>
    <Grid>
      {items.map((item, index) => (
        <StyledPortfolioCardContainer
          desktop={5}
          desktopOffset={isIndexEven(index) ? 2 : 0}
        >
          <PortfolioCard key={item.title} {...item} />
        </StyledPortfolioCardContainer>
      ))}
    </Grid>
  </>
);

PortfolioCardsSection.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  items: arrayOf(
    shape({
      title: string.isRequired,
      text: string.isRequired,
      imageUrl: string.isRequired,
      href: string.isRequired,
    })
  ),
};

export default PortfolioCardsSection;
