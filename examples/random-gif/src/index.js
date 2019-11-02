import merge from "mergerino"
import m from "mithril"
import stream from "mithril/stream"

import { app, App } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

const update = stream()
const states = stream
  .scan(merge, app.initial, update)
  .map(state => app.accept.reduce((x, f) => merge(x, f(x)), state))

// Only for using Meiosis Tracer in development.
meiosisTracer({
  selector: "#tracer",
  streams: [{ label: "states", stream: states }],
  rows: 35
})

const actions = app.Actions(update)

m.mount(document.getElementById("app"), {
  view: () =>
    m(App, {
      state: states(),
      actions
    })
})

states.map(() => m.redraw())
states.map(state => app.services.forEach(service => service({ state, update })))
