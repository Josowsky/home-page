import React, { PureComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { FaBars, FaTimes } from 'react-icons/fa';

import CircularIcon from 'components/CircularIcon/CircularIcon';
import FameSection from 'components/FameSection/FameSection';
import MenuMobile from 'components/MenuMobile/MenuMobile';

import {
  StyledContainer,
  StyledOpenButton,
  StyledSidebarContainer,
  StyledBackgroundImageContainer,
  StyledBackgroundImage,
  StyledCloseButton,
  StyledContentContainer,
  StyledName,
  StyledTitle,
  StyledMenuContainer,
  StyledFameSection,
} from './MobileSideBar.style';

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
          <StyledContainer>
            <StyledOpenButton
              role="button"
              tabIndex="0"
              onClick={this.setMenuOpened(true)}
              onKeyDown={this.setMenuOpened(true)}
            >
              <CircularIcon>
                <FaBars />
              </CircularIcon>
            </StyledOpenButton>
            <StyledSidebarContainer isMenuOpened={isMenuOpened}>
              <StyledBackgroundImageContainer>
                <StyledBackgroundImage
                  fluid={data.file.childImageSharp.fluid}
                  alt="Sidebar background image"
                />
              </StyledBackgroundImageContainer>
              <StyledCloseButton
                role="button"
                tabIndex="0"
                onClick={this.setMenuOpened(false)}
                onKeyDown={this.setMenuOpened(false)}
              >
                <CircularIcon variant="white">
                  <FaTimes />
                </CircularIcon>
              </StyledCloseButton>
              <StyledContentContainer>
                <div>
                  <StyledName>Bartek Józwowiak</StyledName>
                  <StyledTitle>Frontend Engineer</StyledTitle>
                </div>
                <StyledMenuContainer>
                  <MenuMobile onClick={this.setMenuOpened(false)} />
                </StyledMenuContainer>
              </StyledContentContainer>
              <StyledFameSection>
                <FameSection />
              </StyledFameSection>
            </StyledSidebarContainer>
          </StyledContainer>
        )}
      />
    );
  }
}

export default MobileSideBar;
