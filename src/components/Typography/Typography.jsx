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
  font-size: ${props => (props.large ? 20 : 16)}px;
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

export const Code = styled.p`
  margin: ${grid}px auto;
`;
