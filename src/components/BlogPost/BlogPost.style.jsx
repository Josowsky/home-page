import styled from 'styled-components';
import Img from 'gatsby-image';

import { grid, fontWeightBold } from 'shared/constants';

export const StyledContainer = styled.article`
  padding-bottom: ${grid * 4}px;
`;

export const StyledHeader = styled.header`
  margin-bottom: ${grid * 4}px;
`;

export const StyledTitle = styled.h1`
  font-size: 32px;
  font-weight: ${fontWeightBold};
  margin-bottom: ${grid}px;
`;

export const StyledDescription = styled.p`
  font-size: 16px;
`;

export const StyledPostImage = styled(Img)`
  max-width: 565px;
  border-radius: 12px;
  margin: ${grid * 2}px auto;
`;

export const StyledPostContent = styled.div`
  padding-bottom: ${grid * 4}px;

  /*
    Articles are stored in the database as richtext
    Richtext is being transpiled to HTML
  */
  h1 {
    font-size: 24px;
    font-weight: ${fontWeightBold};
    margin: ${grid * 2}px 0;
  }

  h2 {
    font-size: 18px;
    font-weight: ${fontWeightBold};
    margin: ${grid * 2}px 0;
  }

  h3 {
    font-size: 16px;
    font-weight: ${fontWeightBold};
    margin: ${grid}px 0;
  }

  p {
    margin-bottom: ${grid}px;
  }

  image {
    border-radius: 12px;
    margin: ${grid * 2}px auto;
  }
`;

export const StyledBioContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
