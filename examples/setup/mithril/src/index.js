import m from "mithril"
import stream from "mithril/stream"

import { app, App } from "./app"

const update = stream()
const states = stream.scan((state, patch) => patch(state),
  app.initialState(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", streams: [ states ]})
states.map(() => m.redraw())
// End - only for using Meiosis Tracer in development.

const actions = app.actions({ update })
m.mount(document.getElementById("app"),
  { view: () => m(App, { state: states(), actions }) })
