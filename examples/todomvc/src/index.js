import flyd from "flyd"
import O from "patchinko/constant"
import { render } from "lit-html"

import { createApp } from "./app"

const update = flyd.stream()
createApp().then(app => {
  const states = flyd.scan(O, app.state(), update)

  // Only for using Meiosis Tracer in development.
  require("meiosis-tracer")({ selector: "#tracer", rows: 25, streams: [ states ]})

  const actions = app.actions(update)
  const element = document.getElementById("app")
  states.map(state => render(app.view(state, actions), element))
})
