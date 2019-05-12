import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { routes } from 'shared/constants';

import {
  StyledContainer,
  StyledImage,
  StyledAvatar,
  StyledName,
  StyledTitle,
} from './AvatarGroup.style';

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
      <StyledContainer>
        <StyledAvatar to={routes.home}>
          <StyledImage alt="My photo" fixed={data.file.childImageSharp.fixed} />
        </StyledAvatar>
        <StyledName>Bartek Józwowiak</StyledName>
        <StyledTitle>Frontend Developer</StyledTitle>
      </StyledContainer>
    )}
  />
);

export default AvatarGroup;
