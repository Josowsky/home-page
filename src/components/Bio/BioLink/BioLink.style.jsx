import styled from 'styled-components';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import { colorBlue, grid } from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-bottom: ${grid}px;
  margin-left: -3px;

  &:before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${colorBlue};
    opacity: 0.8;
    position: absolute;
    bottom: -4px;
    left: 0;
    transition: transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
    will-change: transform;
    transform: scale(0);
    transform-origin: right center;
  }

  &:hover {
    &:before {
      transform: scale(1);
    }
  }
`;

export const StyledArrow = styled(FaLongArrowAltLeft)`
  color: ${colorBlue};
  transition: transform 0.3s cubic-bezier(0.465, 0.183, 0.153, 0.946);
  transform: translateX(3px);
  will-change: transform;

  ${StyledContainer}:hover & {
    transform: translateX(-1px);
  }
`;

export const StyledLabel = styled.p`
  margin-left: ${grid / 2}px;
  font-weight: 500;
`;
