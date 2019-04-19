import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';

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
            fluid(maxWidth: 465) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <div className={styles.sidebar}>
        <div className={styles.bgImage}>
          <BackgroundImage
            className={styles.image}
            fluid={data.file.childImageSharp.fluid}
            alt="Sidebar background image"
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
