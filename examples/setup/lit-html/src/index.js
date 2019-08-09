import flyd from "flyd"
import merge from "mergerino"
import { render } from "lit-html"

import { app, App } from "./app"

const update = flyd.stream()
const states = flyd.scan(merge, app.Initial(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [states] })

const actions = app.Actions(update)
const element = document.getElementById("app")
states.map(state => render(App({ state, actions }), element))
