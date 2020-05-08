import React from 'react';
import { shape } from 'prop-types';
import rehypeReact from 'rehype-react';

import { getCodeString } from 'shared/utils/getCodeString';
import {
  HeadingLarge,
  Heading,
  HeadingSmall,
  Paragraph,
  Highlight,
  ListItem,
  StaticImage,
} from 'components/Typography/Typography';
import { Code } from 'components/Code/Code';

/**
 * Take html in json format and replace specific
 * HTML tags with React components
 * @param {json} htmlAst - HTML in proper json format
 */
const BlogPostHTML = ({ htmlAst }) => {
  /* eslint-disable react/prop-types */
  const components = {
    p: Paragraph,
    h1: ({ children }) => <HeadingLarge bold>{children}</HeadingLarge>,
    h2: ({ children }) => <Heading bold>{children}</Heading>,
    h3: ({ children }) => <HeadingSmall bold>{children}</HeadingSmall>,
    code: ({ children }) => {
      const codeSnippet = children ? children[0] : '';

      const { codeString: code, lang } = getCodeString(codeSnippet);
      return <Code code={code} language={lang} />;
    },
    em: Highlight,
    li: ListItem,
    img: StaticImage,
  };
  /* eslint-enable react/prop-types */

  const renderAst = new rehypeReact({
    createElement: React.createElement,
    Fragment: React.Fragment,
    components,
  }).Compiler;

  return <>{renderAst(htmlAst)}</>;
};

BlogPostHTML.propTypes = {
  htmlAst: shape({}),
};

export default BlogPostHTML;
