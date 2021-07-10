import styled from 'styled-components';

import { colorWhite } from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  width: 1272px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledCell = styled.div`
  color: ${colorWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  background-color: ${({ color }) => color};
`;
