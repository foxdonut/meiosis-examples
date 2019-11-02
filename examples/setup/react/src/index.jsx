import React from "react"
import { render } from "react-dom"
import flyd from "flyd"

import { app, App } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

const update = flyd.stream()
const states = flyd.scan((state, patch) => patch(state), app.initial, update)

// Only for using Meiosis Tracer in development.
meiosisTracer({ selector: "#tracer", rows: 25, streams: [states] })

const actions = app.Actions(update)
render(<App states={states} actions={actions} />, document.getElementById("app"))
