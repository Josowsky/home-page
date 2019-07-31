import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';

import ImageBox from './ImageBox';

storiesOf(`Portfolio/PortfolioItem/ImageBox`, module).add(
  `ImageBox default`,
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
        <div style={{ width: '600px', margin: '30px' }}>
          <ImageBox
            projectImage={data.file.childImageSharp}
            projectName="Some project"
          />
        </div>
      )}
    />
  )
);
