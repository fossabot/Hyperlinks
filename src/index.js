import { HasMeta } from './lib/_db.js'
import { GetHtml } from './lib/_get.js'
import { ParseDOM } from './lib/_parse.js'
import { extractMetaTags } from './lib/_extract.js'
import { AddScripts } from './lib/_attach.js';

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
AddScripts()
const TOOLTIP = document.createElement('script')
TOOLTIP.type = 'module'
TOOLTIP.defer = true
// eslint-disable-next-line no-template-curly-in-string
const TEMPLATE = '`<div class="hyperlinks-m"><div class="divback" style="background-image: url(${storage["og:image"]})"></div><div class="hyperlinks-t"><strong>${storage["og:title"]}</strong></div><div class="hyperlinks-d">${storage["og:description"]}</div><div class="hyperlinks-l">${storage["og:url"]}</div></div>`'
TOOLTIP.textContent = `document.querySelectorAll('.hyperlinks').forEach(links => {
  links.addEventListener('mouseover', (e) => {
      let href = e.target.getAttribute('href');
      console.log(href);
      let storage = JSON.parse(localStorage.getItem(href))
      console.log(storage);
      tippy(e.target, {
          content: ${TEMPLATE},
          allowHTML: true,
          animation: 'scale',
          delay: [100, 200],
          theme: 'hyperlinks',
          arrow: false,
      });
  });
});`
document.body.appendChild(TOOLTIP)
