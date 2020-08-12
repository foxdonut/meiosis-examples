import queryString from "query-string"
import { searchForm } from "../search-form"

const I = x => x

const queryParams = [window.location.search]
  .filter(I)
  .map(str => str.substring(1))
  .map(queryString.parse)
  .concat({})
  .shift()

export const app = {
  initial: Object.assign(
    {
      channel: "mithriljs/mithril.js",
      user: "@JAForbes",
      term: "superouter",
      year: "2018",
      month: "11",
      noOfMonths: "1",
      results: []
    },
    queryParams
  ),

  Actions: searchForm.Actions
}

export { App } from "./view"
