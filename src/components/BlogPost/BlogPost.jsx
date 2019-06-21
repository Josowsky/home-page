import React from 'react';
import { shape, string } from 'prop-types';
import { graphql } from 'gatsby';

import {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledDescription,
} from './BlogPost.style';

const BlogPost = ({ data: { contentfulPost: post } }) => (
  <StyledContainer>
    <StyledHeader>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledDescription>May 14, 2019 • 6 min read</StyledDescription>
    </StyledHeader>
    <div
      dangerouslySetInnerHTML={{
        __html: post.content.childContentfulRichText.html,
      }}
    />
  </StyledContainer>
);

BlogPost.propTypes = {
  data: shape({
    contentfulPost: shape({
      title: string.isRequired,
      content: shape({
        childContentfulRichText: shape({ html: string.isRequired }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default BlogPost;

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;