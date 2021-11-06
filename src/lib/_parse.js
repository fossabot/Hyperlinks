/**
 *
 * @param {String} ToParse - The meta.contents string to parse
 * @returns {DOMDocument} - The parsed DOMDocument
 */

export const ParseDOM = (ToParse) => {
  const parser = new DOMParser()
  const parsed = parser.parseFromString(ToParse, 'text/html')
  return parsed
}
