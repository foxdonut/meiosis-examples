import stream from "mithril-stream"
import O from "patchinko/constant"

import { pipe } from "./util/fp"
import { render } from "./util/view"
import { createApp } from "./app"

const update = stream()
const getState = stream()
createApp(update, getState).then(app => {
  const models = stream.scan(O, app.model(), update)
  const states = models.map(app.state)
  states.map(pipe(app.view, render(document.getElementById("app"))))
  getState.map(f => f(states()))

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  const meiosisTracer = require("meiosis-tracer")
  meiosisTracer({ streams: [
    { stream: models, label: "models" },
    { stream: states, label: "states" }
  ] })
})
