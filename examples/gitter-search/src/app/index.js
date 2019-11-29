import m from "mithril"

import { searchForm, SearchForm } from "../search-form"
import { Status } from "../status"
import { Results } from "../results"

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

  Actions: searchForm.Actions,

  services: []
}

export const App = {
  view: ({ attrs: { state, actions } }) =>
    m(
      "div",
      m(
        "div",
        "Gitter Search - credit: ",
        m("a", { href: "https://github.com/cavemansspa", target: "_blank" }, "cavemansspa")
      ),
      m(SearchForm, { state, actions }),
      m(Status, { state }),
      m(Results, { state })
    )
}
