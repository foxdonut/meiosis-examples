// @ts-check
import m from "mithril"
import stream from "mithril/stream"
import { setup } from "meiosis-setup/mergerino"

import { app, App } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

const { states, getCell } = setup({ stream, app })

// Only for using Meiosis Tracer in development.
meiosisTracer({
  selector: "#tracer",
  streams: [{ label: "states", stream: states }],
  rows: 35
})

m.mount(document.getElementById("app"), { view: () => m(App, { cell: getCell() }) })

states.map(() => m.redraw())
