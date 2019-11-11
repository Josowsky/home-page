import styled from 'styled-components';

import { grid } from 'shared/constants/constants.style';

export const StyledCode = styled.p`
  margin: ${grid}px auto;

  /**
    Style tag returned from the API.
   */
  pre {
    border-radius: 12px;
  }
`;
