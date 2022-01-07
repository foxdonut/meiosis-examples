import flyd from "flyd"
import merge from "mergerino"
import meiosis from "meiosis-setup/mergerino"
import { render } from "lit"

import { createApp } from "./app"
import { router } from "./router"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

createApp().then(app => {
  const { states, update, actions } = meiosis({ stream: flyd, merge, app })

  // Only for using Meiosis Tracer in development.
  meiosisTracer({ streams: [states] })

  const element = document.getElementById("app")

  states.map(state => {
    render(app.view({ state, actions }), element)
  })

  router.listenToRouteChanges(update)
})
