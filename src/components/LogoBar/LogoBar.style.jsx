import styled from 'styled-components';

import { colorGrey, gutter } from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const StyledLink = styled.a`
  color: ${colorGrey};
  font-size: 16px;

  &:not(:last-child) {
    margin-right: ${gutter(5)};
  }
`;
