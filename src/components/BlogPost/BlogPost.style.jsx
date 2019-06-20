import styled from 'styled-components';

import { grid, fontWeightBold } from 'shared/constants';

export const StyledContainer = styled.article`
  /*
    Articles are stored on the database as richtext
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
