import React from 'react';
import { func, oneOfType, node } from 'prop-types';

import Menu from 'components/Menu/Menu';
import MobileSideBar from 'components/MobileSideBar/MobileSideBar';
import SimpleFooter from 'components/SimpleFooter/SimpleFooter';
import {
  StyledPageContent,
  StyledBlogContent,
  StyledMenu,
} from './PageWrappers.style';

export const PageContent = ({ children }) => (
  <StyledPageContent>
    <StyledMenu>
      <Menu />
    </StyledMenu>
    {children}
    <SimpleFooter />
    <MobileSideBar />
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
