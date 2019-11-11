import React from 'react';
import { string } from 'prop-types';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { StyledCode } from './Code.style';

const Code = ({ code, language }) => (
  <StyledCode>
    <SyntaxHighlighter
      wrapLines
      showLineNumbers
      language={language}
      style={darcula}
    >
      {code}
    </SyntaxHighlighter>
  </StyledCode>
);

Code.propTypes = {
  code: string.isRequired,
  language: string.isRequired,
};

export { Code };
