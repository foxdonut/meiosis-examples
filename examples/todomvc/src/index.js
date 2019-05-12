import flyd from "flyd"
import O from "patchinko/constant"
import { render } from "lit-html"

import { app } from "./app"
import { router } from "./router"

Promise.resolve()
  .then(app.Initial)
  .then(initialState => {
    const update = flyd.stream()
    const reducer = (x, f) => O(x, f(x))

    const states = flyd
      .scan(O, initialState, update)
      .map(state => app.accept.reduce(reducer, state))

    // Only for using Meiosis Tracer in development.
    require("meiosis-tracer")({ selector: "#tracer", rows: 35, streams: [states] })

    const actions = app.Actions(update)
    const element = document.getElementById("app")

    states.map(state => {
      render(app.view({ state, actions }), element)
      app.services.forEach(service => service({ state, update, actions }))
    })

    router.listenToRouteChanges(update)
  })
