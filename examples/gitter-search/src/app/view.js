import m from "mithril"

import { SearchForm } from "../search-form"
import { Status } from "../status"
import { Results } from "../results"

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
