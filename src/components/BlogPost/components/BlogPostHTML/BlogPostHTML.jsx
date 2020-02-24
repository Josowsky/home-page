import React from 'react';
import { shape } from 'prop-types';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import { getCodeString } from 'shared/utils/getCodeString';
import {
  HeadingLarge,
  Heading,
  HeadingSmall,
  Paragraph,
  Image,
  Highlight,
} from 'components/Typography/Typography';
import { Code } from 'components/Code/Code';

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
      [MARKS.CODE]: text => {
        const { codeString, lang } = getCodeString(text);

        return <Code code={codeString} language={lang} />;
      },
      [MARKS.ITALIC]: text => <Highlight>{text}</Highlight>,
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
