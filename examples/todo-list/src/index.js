import React from "react"
import { render } from "react-dom"
import flyd from "flyd"
import merge from "mergerino"

import createServer from "./sinonServer"
import { app, App } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

createServer()

app.Initial().then(initialState => {
  const update = flyd.stream()
  const states = flyd.scan(merge, initialState, update)

  // Only for using Meiosis Tracer in development.
  meiosisTracer({ selector: "#tracer", rows: 25, streams: [states] })

  const actions = app.Actions(update)

  render(<App states={states} actions={actions} />, document.getElementById("app"))
})
