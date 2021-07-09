import React from 'react';
import { string } from 'prop-types';
import { FaLink } from 'react-icons/fa';

import {
  StyledContainer,
  StyledImageContainer,
  StyledImage,
  StyledLink,
  StyledTitle,
  StyledText,
} from './PortfolioCard.style';

const PortfolioCard = ({ title, text, imageUrl, href }) => (
  <StyledContainer>
    <StyledImageContainer href={href}>
      <StyledImage imageUrl={imageUrl} />
      <StyledLink>
        <FaLink />
      </StyledLink>
    </StyledImageContainer>
    <StyledTitle>{title}</StyledTitle>
    <StyledText>{text}</StyledText>
  </StyledContainer>
);

PortfolioCard.propTypes = {
  title: string.isRequired,
  text: string.isRequired,
  imageUrl: string.isRequired,
  href: string.isRequired,
};

export default PortfolioCard;
