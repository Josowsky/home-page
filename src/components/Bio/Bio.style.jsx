import styled from 'styled-components';
import Img from 'gatsby-image';

import {
  colorGrey,
  grid,
  mobileBreakpoint,
} from 'shared/constants/constants.style';

export const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 500px;
`;

export const StyledInfoContainer = styled.div`
  max-width: 300px;

  @media (min-width: ${mobileBreakpoint}px) {
    margin-right: ${grid * 4}px;
  }
`;

export const StyledHeader = styled.h1`
  margin-bottom: ${grid}px;
  color: ${colorGrey};
`;

export const StyledDescription = styled.p`
  margin-bottom: ${grid}px;
  color: ${colorGrey};
`;

export const StyledAvatar = styled(Img)`
  height: 90px;
  width: 90px;
  border-radius: 50%;
  box-shadow: 0px 0px 6px rgba(0, 172, 201, 0.6);
  display: none !important; /* Overwrite gatsby-image style */

  @media (min-width: ${mobileBreakpoint}px) {
    display: block !important;
  }
`;
