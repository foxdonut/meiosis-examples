import { h, render } from "preact"
import flyd from "flyd"

import { app, App } from "./app"

const update = flyd.stream()
const states = flyd.scan((state, patch) => patch(state),
  app.initialState(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", streams: [ states ]})

const actions = app.actions(update)
render(<App states={states} actions={actions}/>, document.getElementById("app"))
