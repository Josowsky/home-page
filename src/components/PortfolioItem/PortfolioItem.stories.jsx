import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';

import PortfolioItem from './PortfolioItem';

storiesOf(`Portfolio/PortfolioItem`, module).add(
  `PortfolioItem default`,
  () => (
    <StaticQuery
      query={graphql`
        query {
          file(relativePath: { eq: "mock-photo.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 650) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <div style={{ width: '900px', margin: '30px' }}>
          <PortfolioItem
            project={{
              image: data.file.childImageSharp,
              name: 'Some project',
              date: '2018 - 2019',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mauris viverra, malesuada nisi et, sagittis purus. Sed finibus sagittis interdum. Nulla sed maximus ipsum, in dictum enim. Sed fermentum ligula quis ex maximus ullamcorper sed ac purus.',
              techStack: 'React, Redux, Rxjs, Storybook',
            }}
          />
        </div>
      )}
    />
  )
);
