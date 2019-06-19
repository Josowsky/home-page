import React from 'react';
import { shape, string } from 'prop-types';
import { graphql } from 'gatsby';

import {
  HeadingLarge,
  Heading,
  HeadingSmall,
  Paragraph,
  Highlight,
} from 'components/Typography/Typography';

import { StyledHeader, StyledTitle, StyledDescription } from './BlogPost.style';

const BlogPost = ({ data: { contentfulPost: post } }) => (
  <p>
    <StyledHeader>
      <StyledTitle>{post.title}</StyledTitle>
      <StyledDescription>May 14, 2019 • 6 min read</StyledDescription>
    </StyledHeader>

    <div
      dangerouslySetInnerHTML={{
        __html: post.content.childContentfulRichText.html,
      }}
    />

    <Paragraph>
      This text is <Highlight>highlighted</Highlight> in some fancy way.
    </Paragraph>

    <HeadingLarge>This is serious heading</HeadingLarge>
    <p>And some text</p>

    <Heading>This is less serious heading</Heading>
    <p>And some text</p>

    <HeadingSmall>This is little heading</HeadingSmall>
    <p>And some text</p>
  </p>
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
