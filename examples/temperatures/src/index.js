import flyd from "flyd"
import preact, { render } from "preact"

import { app, App } from "./app"

const update = flyd.stream()
const models = flyd.scan((model, func) => func(model),
  app.model(), update)
const actions = app.actions(update)

render(<App models={models} actions={actions}/>, document.getElementById("app"))

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"
meiosisTracer({ selector: "#tracer", streams: [ models ] })
