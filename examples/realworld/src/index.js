import meiosisMergerino from "meiosis-setup/mergerino"
import stream from "meiosis-setup/simple-stream"
import merge from "mergerino"

import { assoc, pipe } from "./util/fp"
import { render } from "./util/view"
import { app } from "./app"
import { router } from "./router"

meiosisMergerino({ stream, merge, app }).then(({ update, states, actions }) => {
  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  /*
  const meiosisTracer = require("meiosis-tracer")
  meiosisTracer({
    streams: [{ stream: states, label: "states" }]
  })
  */
  // End of code for using Meiosis Tracer in development.

  states.map(
    pipe(
      state => ({ state, actions }),
      app.view,
      render(document.getElementById("app"))
    )
  )

  router.start({ navigateTo: actions.navigateTo })
  states.map(state => router.locationBarSync(state.route.current))
})

