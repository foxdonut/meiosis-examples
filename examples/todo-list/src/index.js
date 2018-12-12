import React from "react"
import { render } from "react-dom"
import flyd from "flyd"
import { P } from "patchinko/explicit"

import createServer from "./sinonServer"
import { createApp, App } from "./app"

createServer()

const update = flyd.stream()
createApp(update).then(app => {
  const states = flyd.scan(P, app.state(), update)

  // Only for using Meiosis Tracer in development.
  require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [ states ]})

  render(<App states={states} actions={app.actions} />, document.getElementById("app"))
})
