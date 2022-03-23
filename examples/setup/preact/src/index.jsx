import { h, render } from "preact"
import flyd from "flyd"

import { app, App } from "./app"

const update = flyd.stream()
const states = flyd.scan((state, patch) => patch(state), app.initial, update)
const cells = states.map(state => ({ state, update }))

// vv Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"
meiosisTracer({ selector: "#tracer", rows: 25, streams: [states] })
// ^^ Only for using Meiosis Tracer in development.

const element = document.getElementById("app")
cells.map(cell => render(<App cell={cell} />, element))
