import { P } from "patchinko/explicit"
import stream from "mithril/stream"

import { assoc, pipe } from "./util/fp"
import { render } from "./util/view"
import { createApp } from "./app"
import { Route } from "./util/router"

const update = stream()
const navigate = stream()

createApp(update, navigate).then(app => {
  const states = stream.scan(P, app.initialState, update).map(app.service)

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  const meiosisTracer = require("meiosis-tracer")
  meiosisTracer({
    streams: [{ stream: navigate, label: "navigate" }, { stream: states, label: "states" }]
  })
  // End of code for using Meiosis Tracer in development.

  states.map(
    pipe(
      app.view,
      render(document.getElementById("app"))
    )
  )

  const defaultOnNavigateFn = () => ({ navigation, update }) => update(navigation)
  const onNavigateFn = Route.fold(
    Object.assign(
      Object.keys(Route.of).reduce((result, key) => assoc(key, defaultOnNavigateFn, result), {}),
      app.onNavigate
    )
  )

  navigate.map(navigation =>
    onNavigateFn(navigation.route)({ state: states(), navigation, update, navigate })
  )
})
