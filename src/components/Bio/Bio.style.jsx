import styled from 'styled-components';
import Img from 'gatsby-image';

import { colorGrey, grid } from 'shared/constants/constants.style';

export const StyledContainer = styled.section`
  display: flex;
  align-items: center;
  max-width: 500px;
`;

export const StyledInfoContainer = styled.div`
  max-width: 300px;
  margin-right: ${grid * 4}px;
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
  border-radius: 50%;
  box-shadow: 0px 0px 6px rgba(0, 172, 201, 0.6);
`;
