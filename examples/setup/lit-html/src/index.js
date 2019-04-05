import flyd from "flyd"
import O from "patchinko/constant"
import { render } from "lit-html"

import { app, App } from "./app"

const update = flyd.stream()
const states = flyd.scan(O, app.initialState(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [states] })

const element = document.getElementById("app")
states.map(state => render(App({ root: { state, update } }), element))
