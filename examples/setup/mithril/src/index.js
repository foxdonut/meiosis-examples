import m from "mithril"
import { P } from "patchinko/explicit"
import stream from "mithril/stream"

import { app, App } from "./app"

const update = stream()
const states = stream.scan(P, app.initialState(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [ states ]})
states.map(() => m.redraw())
// End - only for using Meiosis Tracer in development.

const actions = app.actions(update)
m.mount(document.getElementById("app"),
  { view: () => m(App, { state: states(), actions }) })
