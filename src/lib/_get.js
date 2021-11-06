/**
 *
 * @param {String} hrefArray - array of hrefs.
 * @returns {JSON} - array of DOMs.
 */

export const GetMeta = async (hrefArray) => {
  const RESPONSE = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('http://github.com')}`)
  return RESPONSE.json()
}
