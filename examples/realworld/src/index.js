import stream from "mithril-stream"

import { pipe } from "./util/fp"
import { render } from "./util/view"
import { createApp } from "./app"

const update = stream()
createApp(update).then(app => {
  const models = stream.scan(app.accumulator, app.model(), update)

  const states = models.map(app.state)
  states.map(pipe(app.view, render(document.getElementById("app"))))
  states.map(state => app.nextAction(state, update()))

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  const meiosisTracer = require("meiosis-tracer")
  meiosisTracer({ streams: [
    { stream: models, label: "models" },
    { stream: states, label: "states" }
  ] })
})
