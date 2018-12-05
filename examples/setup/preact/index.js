import preact from "preact"
import flyd from "flyd"

import { app, App } from "./app"

const update = flyd.stream()
const models = flyd.scan((model, func) => func(model),
  app.model(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", streams: [ models ]})

const actions = app.actions(update)
preact.render(preact.h(App, { models, actions }), document.getElementById("app"))
