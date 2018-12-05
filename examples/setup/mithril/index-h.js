import m from "mithril"
import stream from "mithril/stream"

import { app, App } from "./app-h"

const update = stream()
const models = stream.scan((model, func) => func(model),
  app.model(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", streams: [ models ]})
models.map(() => m.redraw())
// End - only for using Meiosis Tracer in development.

const actions = app.actions(update)
m.mount(document.getElementById("app"),
  { view: () => m(App, { model: models(), actions }) })
