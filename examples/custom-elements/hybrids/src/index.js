import flyd from "flyd"
import merge from "mergerino"
import { define } from "hybrids"

import { app, App } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

const update = flyd.stream()
const states = flyd.scan(merge, app.Initial(), update)

// Only for using Meiosis Tracer in development.
meiosisTracer({ selector: "#tracer", rows: 25, streams: [states] })

const actions = app.Actions(update)
define("meiosis-app", App({ initial: app.initial, actions }))
const element = document.createElement("meiosis-app")
document.getElementById("app").append(element)

states.map(state => {
  element.state = state
  element.render()
})
