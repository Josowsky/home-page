const parseCodeLine = line => (typeof line === 'string' ? line : '\n');

/**
 * Get code snippet from Contentful and convert it into a single string.
 * New lines from the api response are passed as <br /> components.
 * This new lines are converted to \n.
 * Util returns code string and detected language.
 * @param {*} code - code snippet array from Contentful
 */
export const getCodeString = code => {
  let lang = 'markdown';

  const codeString = code
    /**
     * Detect language based on lang::some_language:: tag.
     * Tag might be send from the api according to this convention.
     * If there is no tag, we'll use markdown language as a default.
     */
    .map(line => {
      if (typeof line !== 'string' || !line.includes('lang::')) return line;

      [, lang] = line.split('::');
      const [, , lineAfterLangTag] = line.split('::');

      return lineAfterLangTag;
    })
    /**
     * Sometimes Contentful will send false as a first value of the array.
     * It doesn't add anything to the code snippet so we filter it out.
     */
    .filter(line => Boolean(line))
    /**
     * Every element consisting line of code (always a string) is passed through map as is it.
     * Every element other than string should be converted to the new line symbol cause it's
     * an object containing a component with <br /> tag.
     */
    .map(parseCodeLine)
    /**
     * In the end we're joining all strings into a single string.
     * This single string can be passed to the syntax highlighter component.
     */
    .join('');

  return {
    codeString,
    lang,
  };
};
