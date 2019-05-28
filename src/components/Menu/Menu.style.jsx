import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import { colorBlue, colorGrey, grid } from 'shared/constants';

export const StyledContainer = styled.div`
  display: flex;
`;

export const StyledMenuItem = styled(Link)`
  position: relative;
  margin-left: ${grid}px;
  font-size: 16px;
  color: ${colorGrey};

  ${props =>
    props.isSelected &&
    css`
      color: ${colorBlue};

      &::before {
        position: absolute;
        content: '';
        width: 30px;
        height: 30px;
        background-color: ${colorBlue};
        border-radius: 50%;
        top: -46px;
        left: 50%;
        transform: translate(-50%, 0);
      }
    `}
`;
