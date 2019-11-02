import flyd from "flyd"
import merge from "mergerino"
import { render } from "lit-html"

import { app, App } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

const update = flyd.stream()
const states = flyd.scan(merge, app.Initial(), update)

// Only for using Meiosis Tracer in development.
meiosisTracer({ selector: "#tracer", rows: 25, streams: [states] })

const actions = app.Actions(update)
const element = document.getElementById("app")
states.map(state => render(App({ state, actions }), element))
