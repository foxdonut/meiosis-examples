import meiosisMergerino from "meiosis-setup/mergerino"
import stream from "meiosis-setup/simple-stream"
import merge from "mergerino"

import { render } from "./util/view"
import { createApp } from "./app"
import { router } from "./router"

// Only for development, to use the Meiosis Tracer as a Chrome extension.
import meiosisTracer from "meiosis-tracer"

createApp().then(app => {
  const { states, actions } = meiosisMergerino({ stream, merge, app })

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  meiosisTracer({
    streams: [{ stream: states, label: "states" }]
  })

  const element = document.getElementById("app")

  states.map(state => {
    render(app.view({ state, actions }), element)
    router.locationBarSync(state.route)
  })

  router.start({ navigateTo: actions.navigateTo })
})
