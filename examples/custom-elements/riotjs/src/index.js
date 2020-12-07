import { component } from "riot"
import App from "./app/app.riot"
import flyd from "flyd"
import merge from "mergerino"

import { app } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

const update = flyd.stream()
const states = flyd.scan(merge, app.Initial(), update)
const actions = app.Actions(update)

// Only for using Meiosis Tracer in development.
meiosisTracer({ selector: "#tracer", rows: 25, streams: [states] })

const element = document.getElementById("app")
component(App)(element, { states, update, actions })
