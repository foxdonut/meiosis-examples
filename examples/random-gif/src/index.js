import O from "patchinko/constant"
import m from "mithril"
import stream from "mithril/stream"

import { app, App } from "./app"

const update = stream()
const states = stream
  .scan(O, app.Initial(), update)
  .map(state => app.accept.reduce((x, f) => O(x, f(x)), state))

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
      context: {
        root: states(),
        state: states(),
        path: [],
        lens: x => x
      },
      actions
    })
})

states.map(() => m.redraw())
states.map(state => app.services.forEach(service => service(state, update)))
