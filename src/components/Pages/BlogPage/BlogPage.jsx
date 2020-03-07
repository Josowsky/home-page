import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import { getBlogFormatDate } from 'shared/utils/getBlogFormatDate';
import { getUrlPath } from 'shared/utils/getUrlPath';

import Bio from 'components/Bio/Bio';
import BlogPostCard from 'components/BlogPostCard/BlogPostCard';
import SEO from 'components/SEO/SEO';
import { BlogContent } from 'components/PageWrappers/PageWrappers';
import { StyledContainer, StyledBioContainer } from './BlogPage.style';

const BlogPage = ({
  data: {
    allContentfulPost: { edges: posts },
  },
}) => (
  <BlogContent>
    <StyledContainer>
      <StyledBioContainer>
        <Bio />
      </StyledBioContainer>
      <div>
        {posts.map(
          ({ node: { id, title, description, createdAt, readingTime } }) => (
            <BlogPostCard
              key={id}
              title={title}
              description={description}
              smallDescription={`${getBlogFormatDate(createdAt)}${readingTime &&
                ` • ${readingTime} min read`}`}
              path={`/blog/${getUrlPath(title)}`}
            />
          )
        )}
      </div>
      <SEO
        title="Blog"
        description="On my blog, I write mostly about new frontend libraries and tools and everything related to web development."
      />
    </StyledContainer>
  </BlogContent>
);

BlogPage.propTypes = {
  data: shape({
    allContentfulPost: shape({
      edges: arrayOf(
        shape({
          node: shape({
            title: string,
            description: string,
            id: string,
            createdAt: string,
            readingTime: number,
          }),
        })
      ),
    }),
  }).isRequired,
};

export default BlogPage;
