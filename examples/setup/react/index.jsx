import React from "react"
import ReactDOM from "react-dom"
import flyd from "flyd"

import { app, App } from "./app.jsx"

global.jsx = React.createElement

const update = flyd.stream()
const models = flyd.scan((model, func) => func(model),
  app.model(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", streams: [ models ]})

const actions = app.actions(update)
ReactDOM.render(<App models={models} actions={actions}/>, document.getElementById("app"))
