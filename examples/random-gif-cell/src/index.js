// @ts-check
import merge from "mergerino"
import m from "mithril"
import Stream from "mithril/stream"
import { setupCell } from "meiosis-setup/mergerino"

import { app, App, createCells } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

const stream = {
  stream: Stream,
  scan: (acc, init, stream) => Stream.scan(acc, init, stream)
}

const rootCell = setupCell({ stream, merge, app })
const cells = createCells(rootCell)

// Only for using Meiosis Tracer in development.
meiosisTracer({
  selector: "#tracer",
  streams: [{ label: "states", stream: rootCell.getState }],
  rows: 35
})

m.mount(document.getElementById("app"), { view: () => m(App, { cells }) })

rootCell.getState.map(() => m.redraw())
