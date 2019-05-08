import m from "mithril"
import O from "patchinko/constant"
import stream from "mithril/stream"

import { app, App } from "./app"

const update = stream()
const states = stream.scan(O, app.Initial(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [states] })

const actions = app.Actions(update)

m.mount(document.getElementById("app"), {
  view: () => m(App, { state: states(), actions })
})

states.map(() => m.redraw())
