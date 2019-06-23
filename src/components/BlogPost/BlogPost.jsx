import React from 'react';
import { shape, string, number } from 'prop-types';
import { graphql } from 'gatsby';

import { getBlogFormatDate } from 'shared/utils/getBlogFormatDate';

import Bio from 'components/Bio/Bio';
import SEO from 'components/SEO/SEO';

import {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledDescription,
  StyledPostImage,
  StyledPostContent,
  StyledBioContainer,
} from './BlogPost.style';

const BlogPost = ({ data: { contentfulPost: post } }) => (
  <StyledContainer>
    <StyledHeader>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledDescription>
        {getBlogFormatDate(post.createdAt)}
        {post.readingTime && ` • ${post.readingTime} min read`}
      </StyledDescription>
      <StyledPostImage sizes={post.image.sizes} />
    </StyledHeader>
    <StyledPostContent
      dangerouslySetInnerHTML={{
        __html: post.content.childContentfulRichText.html,
      }}
    />
    <StyledBioContainer>
      <Bio variant="withLink" />
    </StyledBioContainer>
    <SEO title={`${post.title} - Blog`} description={post.description} />
  </StyledContainer>
);

BlogPost.propTypes = {
  data: shape({
    contentfulPost: shape({
      title: string.isRequired,
      description: string.isRequired,
      createdAt: string.isRequired,
      readingTime: number,
      image: shape({
        sizes: shape({}),
      }),
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
      description
      createdAt
      readingTime
      image {
        sizes(maxWidth: 565) {
          ...GatsbyContentfulSizes
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`;
