import React from 'react';
import { shape } from 'prop-types';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { getCodeString } from 'shared/utils/getCodeString';
import {
  HeadingLarge,
  Heading,
  HeadingSmall,
  Paragraph,
  Image,
  Code,
} from 'components/Typography/Typography';

const BlogPostHTML = ({ jsonPost }) => {
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [BLOCKS.HEADING_1]: (node, children) => (
        <HeadingLarge bold>{children}</HeadingLarge>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <Heading bold>{children}</Heading>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <HeadingSmall bold>{children}</HeadingSmall>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => <Image>{children}</Image>,
    },
    renderMark: {
      [MARKS.CODE]: text => (
        <Code>
          <SyntaxHighlighter
            wrapLines
            showLineNumbers
            language="css" // TODO: get language from the api
            style={darcula}
          >
            {getCodeString(text)}
          </SyntaxHighlighter>
        </Code>
      ),
    },
    renderText: text => {
      return text.split('\n').reduce((children, textSegment, index) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
    },
  };

  return <>{documentToReactComponents(jsonPost, options)}</>;
};

BlogPostHTML.propTypes = {
  jsonPost: shape({}),
};

export default BlogPostHTML;
