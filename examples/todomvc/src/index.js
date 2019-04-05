import flyd from "flyd"
import O from "patchinko/constant"
import { render } from "lit-html"

import { app } from "./app"
import { router } from "./router"

Promise.resolve()
  .then(app.initialState)
  .then(initialState => {
    const update = flyd.stream()
    const reducer = (x, f) => O(x, f(x))

    const states = flyd
      .scan(O, initialState, update)
      .map(state => app.computed.reduce(reducer, state))

    // Only for using Meiosis Tracer in development.
    require("meiosis-tracer")({ selector: "#tracer", rows: 35, streams: [states] })

    const element = document.getElementById("app")

    states.map(state => {
      const root = { state, update }
      render(app.view({ root }), element)
      app.services.forEach(service => service({ root: { state, update } }))
    })

    router.listenToRouteChanges(update)
  })
