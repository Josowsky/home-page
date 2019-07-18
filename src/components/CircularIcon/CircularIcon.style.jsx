import styled from 'styled-components';

import { colorBlue } from 'shared/constants/constants.style';

export const StyledIcon = styled.div`
  height: 55px;
  width: 55px;
  background-color: ${props => (props.variant === 'blue' ? colorBlue : '#fff')};
  color: ${props => (props.variant === 'blue' ? '#fff' : colorBlue)};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
