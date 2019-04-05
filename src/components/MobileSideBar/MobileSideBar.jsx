import React, { PureComponent } from 'react';
import cx from 'classnames';
import { FaBars, FaTimes } from 'react-icons/fa';

import CircleIcon from '../CircleIcon/CircleIcon';
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
          <CircleIcon>
            <FaBars />
          </CircleIcon>
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
            <CircleIcon variant="white">
              <FaTimes />
            </CircleIcon>
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
