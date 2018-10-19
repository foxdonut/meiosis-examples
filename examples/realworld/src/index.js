import O from "patchinko/constant"
import stream from "mithril-stream"

import { pipe } from "./util/fp"
import { render } from "./util/view"
import { createApp } from "./app"

const update = stream()

// This allows to call update(patch) or update(model => patch)
const convert = (model, patch) => (typeof patch === "function") ? patch(model) : patch

createApp(update).then(app => {
  const models = stream()

  // Stream of patches, some may be null
  const patches = update.map(patch => {
    const model = models()
    const converted = convert(model, patch)
    return converted && app.verify(model, converted)
  })

  // Only update the model for non-null patches
  patches.map(patch => patch && models(O(models(), patch)))

  const states = models.map(app.state)
  states.map(pipe(app.view, render(document.getElementById("app"))))
  states.map(state => app.nextAction(state, patches()))

  // initial model
  update(app.model())

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  const meiosisTracer = require("meiosis-tracer")
  meiosisTracer({ streams: [
    { stream: models, label: "models" },
    { stream: states, label: "states" }
  ] })
})
