import { createGlobalStyle } from 'styled-components';

import { colorGrey, fontWeightNormal } from 'shared/constants';

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
    color: ${colorGrey};
  }

  h1, h2, h3, h4, h5 {
    font-weight: ${fontWeightNormal};
  }
`;
