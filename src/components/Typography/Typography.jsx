import styled from 'styled-components';
import Img from 'gatsby-image';

import { colorBlue, fontWeightBold, grid } from 'shared/constants';

export const HeadingLarge = styled.h1`
  font-size: 24px;
  font-weight: ${fontWeightBold};
  margin: ${grid * 2}px 0;
`;

export const Heading = styled.h2`
  font-size: 18px;
  font-weight: ${fontWeightBold};
  margin: ${grid * 2}px 0;
`;

export const HeadingSmall = styled.h3`
  font-size: 16px;
  font-weight: ${fontWeightBold};
  margin: ${grid}px 0;
`;

export const Paragraph = styled.p`
  margin-bottom: ${grid}px;
`;

export const Highlight = styled.span`
  color: #fff;
  background-color: ${colorBlue};
  padding: 0.2em;
`;

export const Image = styled(Img)`
  border-radius: 12px;
  margin: ${grid * 2}px auto;
`;
