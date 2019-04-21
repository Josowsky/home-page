import React, { PureComponent } from 'react';
import cx from 'classnames';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { FaBars, FaTimes } from 'react-icons/fa';

import CircularIcon from '../CircularIcon/CircularIcon';
import FameSection from '../FameSection/FameSection';
import MenuMobile from '../Menu/MenuMobile';

import styles from './mobileSideBar.module.scss';

class MobileSideBar extends PureComponent {
  state = {
    isMenuOpened: false,
  };

  setMenuOpened = isMenuOpened => () => this.setState({ isMenuOpened });

  render() {
    const { isMenuOpened } = this.state;

    return (
      <StaticQuery
        query={graphql`
          query {
            file(absolutePath: { regex: "/sidebar/" }) {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => (
          <div className={styles.container}>
            <div
              role="button"
              tabIndex="0"
              onClick={this.setMenuOpened(true)}
              onKeyDown={this.setMenuOpened(true)}
              className={styles.openButton}
            >
              <CircularIcon>
                <FaBars />
              </CircularIcon>
            </div>
            <div
              className={cx(styles.sidebarContainer, {
                [styles.sidebarContainerOpen]: isMenuOpened,
              })}
            >
              <div className={styles.bgImage}>
                <BackgroundImage
                  className={styles.image}
                  fluid={data.file.childImageSharp.fluid}
                  alt="Sidebar background image"
                />
              </div>
              <div
                role="button"
                tabIndex="0"
                onClick={this.setMenuOpened(false)}
                onKeyDown={this.setMenuOpened(false)}
                className={styles.closeButton}
              >
                <CircularIcon variant="white">
                  <FaTimes />
                </CircularIcon>
              </div>
              <div className={styles.contentContainer}>
                <div>
                  <div className={styles.name}>Bartek Józwowiak</div>
                  <div className={styles.title}>Frontend Developer</div>
                </div>
                <div className={styles.menuContainer}>
                  <MenuMobile onClick={this.setMenuOpened(false)} />
                </div>
              </div>
              <div className={styles.fameSection}>
                <FameSection />
              </div>
            </div>
          </div>
        )}
      />
    );
  }
}

export default MobileSideBar;
