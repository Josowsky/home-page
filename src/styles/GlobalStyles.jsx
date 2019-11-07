import { createGlobalStyle } from 'styled-components';

import {
  colorBlue,
  colorGrey,
  fontWeightNormal,
  mobileBreakpoint,
} from 'shared/constants/constants.style';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Ubuntu', Helvetica Neue, Helvetica, Arial, sans-serif;
    font-style: normal;
    font-variant: normal;
    font-weight: ${fontWeightNormal};
    color: ${colorGrey};
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: ${colorBlue};
  }

  h1, h2, h3, h4, h5 {
    font-weight: ${fontWeightNormal};
    margin: 0;
  }

  h1 {
    font-size: 24px;

    @media (min-width: ${mobileBreakpoint}px) {
      font-size: 32px;
    }
  }

  h2 {
    font-size: 16px;

    @media (min-width: ${mobileBreakpoint}px) {
      font-size: 24px;
    }
  }

  p {
    margin: 0;
  }
`;
