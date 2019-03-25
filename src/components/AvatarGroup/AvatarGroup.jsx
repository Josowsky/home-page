import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { routes } from '../../shared/constants';

import styles from './avatarGroup.module.scss';

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
        <Link to={routes.home} className={styles.avatar}>
          <Img
            alt="My photo"
            className={styles.avatarImage}
            fixed={data.file.childImageSharp.fixed}
          />
        </Link>
        <div className={styles.name}>Bartek Józwowiak</div>
        <div className={styles.title}>Frontend Developer</div>
      </div>
    )}
  />
);

export default AvatarGroup;
