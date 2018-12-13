import React from "react"
import ReactDOM from "react-dom"
import flyd from "flyd"

import { app, App } from "./app.jsx"

global.jsx = React.createElement

const update = flyd.stream()
const states = flyd.scan((state, patch) => patch(state),
  app.initialState(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", streams: [ states ]})

const actions = app.actions(update)
ReactDOM.render(<App states={states} actions={actions}/>, document.getElementById("app"))
