import stream from "mithril/stream"
import merge from "mergerino"

import { meiosis } from "./meiosis"
import { compose } from "./util/fp"
import { render } from "./util/view"
import { createApp } from "./app"
import { router, navigateTo } from "./router"

// Only for development, to use the Meiosis Tracer as a Chrome extension.
import meiosisTracer from "meiosis-tracer"

createApp().then(app => {
  const { states, update, actions } = meiosis({ stream, merge, app })

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  meiosisTracer({ streams: [{ stream: states, label: "states" }] })

  const element = document.getElementById("app")

  states.map(state => {
    render(app.view({ state, actions }), element)
  })

  router.start({ navigateTo: compose(update, navigateTo) })
})
