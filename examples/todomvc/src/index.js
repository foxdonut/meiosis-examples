import flyd from "flyd"
//import O from "patchinko/constant"
import { render } from "lit-html"

import { loadInitialState, app } from "./app"

loadInitialState().then(initialState => {
  const update = flyd.stream()
  const states = flyd.scan((x, f) => f(x), initialState, update)

  // Only for using Meiosis Tracer in development.
  require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [ states ]})

  const actions = app.actions(update)
  const element = document.getElementById("app")
  states.map(state => render(app.view(state, actions), element))
})
