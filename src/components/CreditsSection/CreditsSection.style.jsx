import styled from 'styled-components';
import { FaCoffee, FaHeart } from 'react-icons/fa';

import { colorGreyLight } from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  color: ${colorGreyLight};
  width: 100%;
  display: flex;
  font-size: 14px;
`;

export const StyledTitle = styled.div`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
`;

export const StyledFaCoffee = styled(FaCoffee)`
  margin: 0 4px;
`;

export const StyledFaHeart = styled(FaHeart)`
  margin: 0 4px;
`;
