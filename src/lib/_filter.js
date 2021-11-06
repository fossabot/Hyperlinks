export const Filter = (target) => {
  const getMetaContent = (function () {
    const metas = {}
    const metaGetter = function (metaName) {
      let wasDOMQueried = true
      if (metas[metaName]) {
        wasDOMQueried = false
      } else {
        Array.prototype.some.call(target.getElementsByTagName('meta'), function (el) {
          if (el.name === metaName) {
            metas[metaName] = el.content
            return true
          }
          if (el.getAttribute('property') === metaName) {
            metas[metaName] = el.content
            return true
          } else {
            metas[metaName] = 'meta tag not found'
          }
        })
      }
      console.info('Q:wasDOMQueried? A:' + wasDOMQueried)
      console.info(metas)
      return metas[metaName]
    }
    return metaGetter
  })()

  getMetaContent('description')
}
