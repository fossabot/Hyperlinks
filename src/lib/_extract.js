import { StoreMeta } from './_db.js'

/**
 * To extract the meta-tags from the parsed DOM.
 * @param {Object} parsedDOM - The parsed DOM.
 * @param {Object} metaNames - The needed meta-tags.
 * @returns {Object} The meta-tags.
 */

export const extractMetaTags = (parsedDOM, metaNames, anchorHref) => {
  const metas = {}
  metaNames.map(metaName => {
    Array.prototype.some.call(parsedDOM.getElementsByTagName('meta'), (el) => {
      if (el.name === metaName) {
        metas[metaName] = el.content
        return true
      }
      if (el.getAttribute('property') === metaName) {
        metas[metaName] = el.content
        return true
      } else {
        metas[metaName] = 'Not available'
      }
    })
    return metas
  })
  console.log(metas)
  StoreMeta(anchorHref, metas)
  return metas
}
