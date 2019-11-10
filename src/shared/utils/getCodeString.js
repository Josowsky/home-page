/**
 * Get code snippet from Contentful and convert it into a single string.
 * New lines from the api response are passed as <br /> components.
 * This new lines are converted to \n.
 * @param {*} code - code snippet array from Contentful
 */
export const getCodeString = code =>
  code
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
    .map(line => (typeof line === 'string' ? line : '\n'))
    /**
     * In the end we're joining all strings into a single string.
     * This single string can be passed to the syntax highlighter component.
     */
    .join('');
