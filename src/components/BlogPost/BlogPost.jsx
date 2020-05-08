import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';
import { graphql } from 'gatsby';

import { getBlogFormatDate } from 'shared/utils/getBlogFormatDate';

import Bio from 'components/Bio/Bio';
import { BlogContent } from 'components/PageWrappers/PageWrappers';
import SEO from 'components/SEO/SEO';
import Tags from 'components/Tags/Tags';

import {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledDescription,
  StyledPostImage,
  StyledPostContent,
  StyledBioContainer,
  StyledTagsContainer,
} from './BlogPost.style';

const BlogPost = ({ data: { contentfulPost: post } }) => (
  <BlogContent>
    <StyledContainer>
      <StyledHeader>
        <StyledTitle>{post.title}</StyledTitle>
        <StyledDescription>
          {getBlogFormatDate(post.createdAt)}
          {post.readingTime && ` • ${post.readingTime} min read`}
        </StyledDescription>
        {post.image && <StyledPostImage sizes={post.image.sizes} />}
      </StyledHeader>
      {post.contentMd && (
        <StyledPostContent
          htmlAst={post.contentMd.childMarkdownRemark.htmlAst}
        />
      )}
      {post.tags && (
        <StyledTagsContainer>
          <Tags tags={post.tags} />
        </StyledTagsContainer>
      )}
      <StyledBioContainer>
        <Bio variant="withLink" />
      </StyledBioContainer>
      <SEO
        title={`${post.title} - Blog`}
        description={post.description}
        imageUrl={
          post.image ? post.image.file.url.replace('//', 'http://') : ''
        }
      />
    </StyledContainer>
  </BlogContent>
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
        file: shape({ url: string }),
      }),
      contentMd: shape({
        childMarkdownRemark: shape({
          htmlAst: shape({}).isRequired,
        }).isRequired,
      }).isRequired,
      tags: arrayOf(string),
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
        file {
          url
        }
      }
      contentMd {
        childMarkdownRemark {
          htmlAst
        }
      }
      tags
    }
  }
`;
