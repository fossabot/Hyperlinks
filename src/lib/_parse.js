/**
 * Parse Raw HTML to a DOM tree.
 * @param {string} RawHtml -  Raw HTML.
 * @returns {object} - DOM tree.
 */

export const ParseDOM = (RawHtml) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(RawHtml, 'text/html')
  return doc
}
