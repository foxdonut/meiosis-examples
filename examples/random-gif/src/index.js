import merge from "mergerino"
import m from "mithril"
import stream from "mithril/stream"

import { app, App } from "./app"

const update = stream()
const states = stream
  .scan(merge, app.Initial(), update)
  .map(state => app.accept.reduce((x, f) => merge(x, f(x)), state))

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({
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
