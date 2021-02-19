import m from "mithril"
import merge from "mergerino"
import stream from "mithril/stream"

import { app, App } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

const update = stream()
const states = stream.scan(merge, app.Initial(), update)

// Only for using Meiosis Tracer in development.
meiosisTracer({ selector: "#tracer", rows: 30, cols: 40, streams: [states] })

const actions = app.Actions(update)

m.mount(document.getElementById("app"), {
  view: () => m(App, { state: states(), actions })
})

states.map(() => m.redraw())
