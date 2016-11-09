import axios from 'axios'

const API_URL = 'http://localhost:3000'
const ContentRangeStructure = /^(\d+)-(\d+)\/(\d+)$/

export default function callApi (options) {
  if (typeof options === 'string') options = { url: options }
  options.headers = options.headers || {}

  options.url = API_URL + '/' + options.url

  // pagination
  if (options.page && options.itemsPerPage) {
    const to = (options.page || 1) * options.itemsPerPage - 1
    const from = to - options.itemsPerPage + 1
    // this.header['Range-Unit'] = 'items'
    options.headers['Range'] = `${from || 0}-${to || ''}`
  }

  // single
  if (options.single) {
    options.headers['Prefer'] = 'plurality=singular'
  }

  return axios(options)
  .then(res => {
    const contentRange = res.headers['content-range']
    const json = res.data
    if (json && Array.isArray(json) && contentRange && ContentRangeStructure.test(contentRange)) {
      json.fullLength = parseInt(ContentRangeStructure.exec(contentRange)[3], 10)
    }
    return json
  })
}
