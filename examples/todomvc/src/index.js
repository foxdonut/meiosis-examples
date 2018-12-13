import flyd from "flyd"
//import O from "patchinko/constant"
import { render } from "lit-html"

import { loadInitialState, app } from "./app"
import { createRouter } from "./router"

loadInitialState().then(initialState => {
  const update = flyd.stream()
  const states = flyd.scan((x, f) => f(x), initialState, update)

  // Only for using Meiosis Tracer in development.
  require("meiosis-tracer")({ selector: "#tracer", rows: 35, streams: [ states ]})

  const actions = app.actions({ update })
  const router = createRouter({ update })

  const element = document.getElementById("app")
  states
    .map(app.service)
    .map(router.routeSync)
    .map(state => render(app.view(state, actions), element))
})
