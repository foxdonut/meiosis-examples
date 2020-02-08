import { searchForm } from "../search-form"

export const app = {
  initial: {
    channel: "mithriljs/mithril.js",
    user: "@JAForbes",
    term: "superouter",
    year: "2018",
    month: "11",
    noOfMonths: "1",
    results: []
  },

  Actions: searchForm.Actions
}

export { App } from "./view"
