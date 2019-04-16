import m from "mithril"
import O from "patchinko/constant"
import stream from "mithril/stream"

import { app, App } from "./app"

const update = stream()
const states = stream.scan(O, app.initialState(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [states] })

const actions = app.actions(update)

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
