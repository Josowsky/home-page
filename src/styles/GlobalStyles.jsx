import { createGlobalStyle } from 'styled-components';

import {
  colorBlue,
  colorGrey,
  fontWeightNormal,
  mobileBreakpoint,
} from 'shared/constants';

export default createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: 'Ubuntu', sans-serif;
  color: ${colorGrey};
  font-weight: ${fontWeightNormal};
}

  div {
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
