import m from "mithril"
import O from "patchinko/constant"
import stream from "mithril/stream"

import { app, App } from "./app"

const update = stream()
const states = stream.scan(O, app.initialState(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [states] })
states.map(() => m.redraw())
// End - only for using Meiosis Tracer in development.

m.mount(document.getElementById("app"), {
  view: () => m(App, { root: { state: states(), update } })
})
