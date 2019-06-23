import styled from 'styled-components';
import Button from 'components/Button/Button';

import { grid, mobileBreakpoint } from 'shared/constants/constants.style';

export const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 730px;
`;

export const StyledHeader = styled.h1`
  margin-top: ${grid * 3}px;
  margin-bottom: ${grid * 2}px;
`;

export const StyledParagraph = styled.p`
  font-size: 16px;
  margin-bottom: ${grid}px;
  text-align: left;

  @media (min-width: ${mobileBreakpoint}px) {
    font-size: 24px;
    margin-bottom: ${grid * 1.5}px;
  }
`;

export const StyledButtons = styled.div`
  display: flex;
  justify-content: stretch;
  margin: ${grid * 2}px auto 0 auto;
  width: 60%;

  @media (min-width: ${mobileBreakpoint}px) {
    width: 200px;
  }
`;

export const StyledButton = styled(Button)`
  flex: 1 1 0%;
  margin: ${grid}px;
`;
