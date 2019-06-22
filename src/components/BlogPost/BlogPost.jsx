import React from 'react';
import { shape, string } from 'prop-types';
import { graphql } from 'gatsby';

import Bio from 'components/Bio/Bio';

import {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledDescription,
  StyledPostContent,
  StyledBioContainer,
} from './BlogPost.style';

const BlogPost = ({ data: { contentfulPost: post } }) => (
  <StyledContainer>
    <StyledHeader>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledDescription>May 14, 2019 • 6 min read</StyledDescription>
    </StyledHeader>
    <StyledPostContent
      dangerouslySetInnerHTML={{
        __html: post.content.childContentfulRichText.html,
      }}
    />
    <StyledBioContainer>
      <Bio />
    </StyledBioContainer>
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
  query ContentfulBlogPostById($id: String!) {
    contentfulPost(id: { eq: $id }) {
      title
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
