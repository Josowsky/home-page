import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';

import AvatarGroup from '../AvatarGroup/AvatarGroup';
import CreditsSection from '../CreditsSection/CreditsSection';
import FameSection from '../FameSection/FameSection';

import styles from './sidebar.module.scss';

const Sidebar = () => (
  <StaticQuery
    query={graphql`
      query {
        file(absolutePath: { regex: "/sidebar/" }) {
          childImageSharp {
            fixed(width: 465) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.sidebar}>
        <div className={styles.bgImage}>
          <Img
            alt="Sidebar background image"
            fixed={data.file.childImageSharp.fixed}
          />
        </div>

        <div className={styles.fameSection}>
          <FameSection />
        </div>
        <div className={styles.avatarGroup}>
          <AvatarGroup />
        </div>
        <div className={styles.sidebarFooter}>
          <CreditsSection />
        </div>
      </div>
    )}
  />
);

export default Sidebar;
