import React, { PureComponent } from 'react';
import cx from 'classnames';
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
          <div className={styles.nameContainer}>
            <div className={styles.name}>Bartek Józwowiak</div>
            <div className={styles.title}>Frontend Developer</div>
          </div>
          <div className={styles.menuContainer}>
            <MenuMobile />
          </div>
          <div className={styles.fameSection}>
            <FameSection />
          </div>
        </div>
      </div>
    );
  }
}

export default MobileSideBar;
