/**
 *
 * @returns {Array} - Returns an array of unique values
 */

export const Unique = () => {
  const RAW = [...document.getElementsByClassName('hyperlinks')].map((href) => href.href)
  const UNIQUE = [...new Set(RAW)]
  return UNIQUE
}
