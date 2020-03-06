import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import SimpleFooter from 'components/SimpleFooter/SimpleFooter';
import { StyledPageContent, StyledBlogContent } from './PageWrappers.style';

export const PageContent = ({ children }) => (
  <StyledPageContent>
    {children}
    <SimpleFooter />
  </StyledPageContent>
);

PageContent.propTypes = {
  children: oneOfType([func, node]),
};

export const BlogContent = ({ children }) => (
  <StyledBlogContent>
    {children}
    <SimpleFooter />
  </StyledBlogContent>
);

BlogContent.propTypes = {
  children: oneOfType([func, node]),
};
