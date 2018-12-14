import flyd from "flyd"
import { render } from "lit-html"

import { app, App } from "./app"

const update = flyd.stream()
const states = flyd.scan((state, patch) => patch(state),
  app.initialState(), update)

// Only for using Meiosis Tracer in development.
require("meiosis-tracer")({ selector: "#tracer", streams: [ states ]})

const actions = app.actions({ update })
const element = document.getElementById("app")
states.map(state => render(App({ state, actions }), element))
