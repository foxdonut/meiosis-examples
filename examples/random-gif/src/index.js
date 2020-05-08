import merge from "mergerino"
import m from "mithril"
import stream from "mithril/stream"

import { meiosis } from "./util/meiosis"
import { app, App } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

const { states, actions } = meiosis({ stream, merge, app })

// Only for using Meiosis Tracer in development.
meiosisTracer({
  selector: "#tracer",
  streams: [{ label: "states", stream: states }],
  rows: 35
})

m.mount(document.getElementById("app"), { view: () => m(App, { state: states(), actions }) })
