import O from "patchinko/constant"
import m from "mithril"
import stream from "mithril/stream"

import { app, App } from "./app"

const update = stream()
const states = stream
  .scan(O, app.initialState(), update)
  .map(state => app.computed.reduce((x, f) => O(x, f(x)), state))

// Only for using Meiosis Tracer in development.
const meiosisTracer = require("meiosis-tracer")
meiosisTracer({ selector: "#tracer", streams: [{ label: "states", stream: states }] })
states.map(() => m.redraw())
// End of code for using Meiosis Tracer in development.

m.mount(document.getElementById("app"), {
  view: () => m(App, { root: { state: states(), update } })
})
