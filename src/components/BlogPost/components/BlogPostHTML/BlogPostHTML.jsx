import React from 'react';
import { shape } from 'prop-types';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs } from 'react-syntax-highlighter/dist/esm/styles/prism';

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
        <HeadingLarge>{children}</HeadingLarge>
      ),
      [BLOCKS.HEADING_2]: (node, children) => <Heading>{children}</Heading>,
      [BLOCKS.HEADING_3]: (node, children) => (
        <HeadingSmall>{children}</HeadingSmall>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => <Image>{children}</Image>,
    },
    renderMark: {
      [MARKS.CODE]: text => (
        <Code>
          <SyntaxHighlighter language="javascript" style={vs}>
            <>{text}</>
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
