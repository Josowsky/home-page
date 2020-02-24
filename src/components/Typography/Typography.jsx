import styled from 'styled-components';
import Img from 'gatsby-image';

import {
  colorBlue,
  fontWeightBold,
  fontWeightNormal,
  grid,
} from 'shared/constants/constants.style';

export const HeadingLarge = styled.h1`
  font-size: 32px;
  font-weight: ${props => (props.bold ? fontWeightBold : fontWeightNormal)};
  margin: ${grid * 2}px 0 ${grid}px 0;
`;

export const Heading = styled.h2`
  font-size: 18px;
  font-weight: ${props => (props.bold ? fontWeightBold : fontWeightNormal)};
  margin: ${grid * 2}px 0 ${grid}px 0;
`;

export const HeadingSmall = styled.h3`
  font-size: 16px;
  font-weight: ${props => (props.bold ? fontWeightBold : fontWeightNormal)};
  margin: ${grid}px 0 ${grid / 2}px 0;
`;

export const Paragraph = styled.p`
  margin-bottom: ${grid}px;
  font-size: 16px;
  line-height: 1.5em;
`;

export const Highlight = styled.span`
  color: ${colorBlue};
  background-color: ${`${colorBlue}20`};
  padding: 0.04em 0.25em;
  border-radius: 4px;
`;

export const Image = styled(Img)`
  border-radius: 12px;
  margin: ${grid * 2}px auto;
`;
