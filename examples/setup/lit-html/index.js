import flyd from "flyd"
import { render } from "lit-html"

import { app } from "./app"

const update = flyd.stream()
const models = flyd.scan((model, func) => func(model),
  app.model(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", streams: [ models ]})

const actions = app.actions(update)
const element = document.getElementById("app")
models.map(model => render(app.view(model, actions), element))
