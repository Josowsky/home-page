import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import SimpleFooter from 'components/SimpleFooter/SimpleFooter';

import { StyledBlogContent } from '../Layout/Layout.style';

const BlogTemplate = ({ children }) => (
  <>
    <StyledBlogContent>{children}</StyledBlogContent>
    <SimpleFooter />
  </>
);

BlogTemplate.propTypes = {
  children: oneOfType([func, node]),
};

export default BlogTemplate;
