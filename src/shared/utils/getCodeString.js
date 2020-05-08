const LANGUAGE_TAG_REGEX = /^lang::.*::/;

/**
 * Util returns code snippet and detected language.
 * Code snippet from Contentful might have a code tag in the first line.
 * Code tag follows following convention "lang::language-name::"
 * This util will detect this tag if it exists and return detected language and rest of the snippet.
 * @param {string} code - code snippet string from Contentful
 */
export const getCodeString = code => {
  /**
   * Use markdown by default if no language tag is detected.
   */
  const defaultLanguage = 'markdown';
  let detectedLanguage = null;
  const languageTag = code.match(LANGUAGE_TAG_REGEX);

  // Language tag detected
  if (languageTag && languageTag[0]) {
    const languageTagParts = languageTag[0].split('::');
    const languageFromTag = languageTagParts && languageTagParts[1];

    if (languageFromTag) {
      detectedLanguage = languageFromTag;
    }
  }

  /**
   * If language tag was present then remove it from snippet.
   */
  const parsedCode = detectedLanguage
    ? code.replace(LANGUAGE_TAG_REGEX, '').trim()
    : code;

  return {
    codeString: parsedCode.trim(),
    lang: detectedLanguage || defaultLanguage,
  };
};
