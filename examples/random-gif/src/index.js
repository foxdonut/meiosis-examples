// @ts-check
import m from "mithril"
import stream from "mithril/stream"
import { setup } from "meiosis-setup/mergerino"

import { app, App } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

const cells = setup({ stream, app })

// Only for using Meiosis Tracer in development.
meiosisTracer({
  selector: "#tracer",
  streams: [{ label: "states", stream: cells.map(cell => cell.state) }],
  rows: 35
})

m.mount(document.getElementById("app"), { view: () => m(App, { cell: cells() }) })

cells.map(() => m.redraw())
