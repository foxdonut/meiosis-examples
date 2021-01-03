import stream from "meiosis-setup/simple-stream"
import merge from "mergerino"

import { meiosis } from "./meiosis"
import { compose } from "./util/fp"
import { render } from "./util/view"
import { createApp } from "./app"
import { router, toRoutePatch } from "./router"
import { selectors } from "./selectors"

// Only for development, to use the Meiosis Tracer as a Chrome extension.
import meiosisTracer from "meiosis-tracer"

createApp(router).then(app => {
  const { states, update, actions } = meiosis({ stream, merge, app })

  router.start(compose(update, toRoutePatch))
  states.map(compose(router.syncLocationBar, selectors.route))

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  meiosisTracer({ streams: [{ stream: states, label: "states" }] })

  const element = document.getElementById("app")

  states.map(state => {
    render(app.view({ state, actions }), element)
  })
})
