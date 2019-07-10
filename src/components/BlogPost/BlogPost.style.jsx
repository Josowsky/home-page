import styled from 'styled-components';
import Img from 'gatsby-image';

import {
  grid,
  fontWeightBold,
  mobileBreakpoint,
} from 'shared/constants/constants.style';

import BlogPostHTML from './components/BlogPostHTML/BlogPostHTML';

export const StyledContainer = styled.article`
  padding-bottom: ${grid}px;

  @media (min-width: ${mobileBreakpoint}px) {
    padding-bottom: ${grid * 3}px;
  }
`;

export const StyledHeader = styled.header`
  margin-bottom: ${grid * 2}px;

  @media (min-width: ${mobileBreakpoint}px) {
    margin-bottom: ${grid * 4}px;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: ${fontWeightBold};
  margin-bottom: ${grid}px;

  @media (min-width: ${mobileBreakpoint}px) {
    font-size: 32px;
  }
`;

export const StyledDescription = styled.p`
  font-size: 16px;
`;

export const StyledPostImage = styled(Img)`
  max-width: 565px;
  border-radius: 12px;
  margin: ${grid * 2}px auto;
`;

export const StyledPostContent = styled(BlogPostHTML)`
  padding-bottom: ${grid * 4}px;
`;

export const StyledBioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
