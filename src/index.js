import { HasMeta } from './lib/_db.js'
import { GetHtml } from './lib/_get.js'
import { ParseDOM } from './lib/_parse.js'
import { extractMetaTags } from './lib/_extract.js';

(async () => {
  const NATIVE = [...document.getElementsByClassName('hyperlinks')].map(x => x.href)
  const FEEDER = [...new Set(NATIVE)]
  console.log(FEEDER)
  const NEW = HasMeta(FEEDER)
  console.log(NEW)
  if (NEW.length < 1) {
    return
  }
  const data = await GetHtml(FEEDER)
  data.map(Raw => {
    const DOM = ParseDOM(Raw.contents)
    console.log(DOM)
    const NEEDEDMETA = ['og:image', 'og:url', 'og:title', 'og:description']
    extractMetaTags(DOM, NEEDEDMETA, Raw.status.url)
    return true
  })
})()
