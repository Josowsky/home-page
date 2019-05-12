import styled from 'styled-components';

import { colorBlue, mobileBreakpoint } from 'shared/constants';

const StyledBorder = styled.div`
  display: none;

  @media (min-width: ${mobileBreakpoint}px) {
    display: block;
    background-color: ${colorBlue};
    position: fixed;
    z-index: 2;
  }

  &::before {
    content: '';
    position: fixed;
    background: #fff;
    height: 16px;
    width: 16px;
    border-radius: 12px;
    z-index: 3;
  }

  &::after {
    content: '';
    position: fixed;
    background: ${colorBlue};
    height: 8px;
    width: 8px;
    z-index: 2;
  }
`;

export const StyledBorderTop = styled(StyledBorder)`
  top: 0;
  left: 0;
  width: 100%;
  height: 12px;

  &::before {
    top: 12px;
    left: 12px;
  }

  &::after {
    top: 12px;
    left: 12px;
  }
`;

export const StyledBorderRight = styled(StyledBorder)`
  top: 0;
  right: 0;
  width: 12px;
  height: 100%;

  &::before {
    top: 12px;
    right: 12px;
  }

  &::after {
    top: 12px;
    right: 12px;
  }
`;

export const StyledBorderBottom = styled(StyledBorder)`
  bottom: 0;
  left: 0;
  width: 100%;
  height: 12px;

  &::before {
    bottom: 12px;
    right: 12px;
  }

  &::after {
    bottom: 12px;
    right: 12px;
  }
`;

export const StyledBorderLeft = styled(StyledBorder)`
  top: 0;
  left: 0;
  width: 12px;
  height: 100%;

  &::before {
    bottom: 12px;
    left: 12px;
  }

  &::after {
    bottom: 12px;
    left: 12px;
  }
`;
