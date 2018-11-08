import O from "patchinko/constant"
import stream from "mithril-stream"

import { pipe } from "./util/fp"
import { render } from "./util/view"
import { createApp } from "./app"

const update = stream()

createApp(update).then(app => {
  const models = stream()

  // Stream of patches, with nulls filtered out
  const patches = stream()

  update.map(patch => {
    const result = app.accept(models() || patch, patch)
    if (result) { patches(result) }
  })

  patches.map(patch => models(O(models(), patch)))

  const states = models.map(model => app.service(model, patches()))
  states.map(pipe(app.view, render(document.getElementById("app"))))
  states.map(state => app.nextAction(state, patches()))

  // initial model
  update(app.model)

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  const meiosisTracer = require("meiosis-tracer")
  meiosisTracer({ streams: [
    //{ stream: models, label: "models" },
    { stream: states, label: "states" }
  ] })
})
