import { Unique } from './lib/_unique.js'
import { GetMeta } from './lib/_get.js'
import { ParseDOM } from './lib/_parse.js'
import { Filter } from './lib/_filter.js'

(() => {
  const FEEDER = Unique()
  console.log(FEEDER)
  FEEDER.map(href => {
    /* This line => */ console.log(href)
    GetMeta(href).then(meta => {
      const result = ParseDOM(meta.contents)
      console.log(result)
      Filter(result)
    })
    return true
  })
})()
