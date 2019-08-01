import meiosisMergerino from "meiosis-setup/mergerino"
import stream from "meiosis-setup/simple-stream"
import merge from "mergerino"

import { render } from "./util/view"
import { app } from "./app"
import { router } from "./router"

meiosisMergerino({ stream, merge, app }).then(({ states, actions }) => {
  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  const meiosisTracer = require("meiosis-tracer")
  meiosisTracer({
    streams: [{ stream: states, label: "states" }]
  })
  // End of code for using Meiosis Tracer in development.

  const element = document.getElementById("app")

  states.map(state => {
    render(app.view({ state, actions }), element)
    router.locationBarSync(state.route.current)
  })

  router.start({ navigateTo: actions.navigateTo })
})

/*
FIXME:
- profile favorites pager
- improve Profile vs Favorites routing
*/
