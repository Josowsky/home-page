import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import styles from './avatarGroup.module.css';

const AvatarGroup = () => (
  <StaticQuery
    query={graphql`
      query {
        file(absolutePath: { regex: "/avatar/" }) {
          childImageSharp {
            fixed(height: 168, width: 168) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.container}>
        <Img
          alt="My photo"
          className={styles.avatar}
          fixed={data.file.childImageSharp.fixed}
        />
        <div className={styles.name}>Bartek Józwowiak</div>
        <div className={styles.title}>Frontend Developer</div>
      </div>
    )}
  />
);

export default AvatarGroup;
