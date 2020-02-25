import styled from 'styled-components';

import { colorBlue, grid } from 'shared/constants/constants.style';

export const StyledContainer = styled.section`
  padding: ${grid}px 0;
`;

export const StyledHeader = styled.h1`
  font-size: 16px;
  font-weight: 600;
`;

export const StyledTagsContainer = styled.div`
  margin-top: ${grid}px;
`;

export const StyledTag = styled.p`
  background-color: ${`${colorBlue}20`};
  padding: 0.2em 0.5em;
  border-radius: 4px;
  display: inline-flex;
  margin-right: 10px;
  margin-bottom: 10px;
`;
