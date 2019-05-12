import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { grid } from 'shared/constants';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const StyledMenuItem = styled(Link)`
  color: #fff;
  position: relative;
  margin-top: ${grid}px;
  font-size: 24px;

  ${props =>
    props.isSelected &&
    css`
      &::before {
        position: absolute;
        content: '';
        width: 20px;
        height: 20px;
        background-color: #fff;
        border-radius: 50%;
        top: 50%;
        left: -28px;
        transform: translate(0, -50%);
      }
    `}
`;
