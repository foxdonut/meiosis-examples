import O from "patchinko/constant"
import stream from "mithril-stream"

import { assoc, pipe } from "./util/fp"
import { render } from "./util/view"
import { createApp } from "./app"
import { Route } from "./util/router"

const update = stream()
const navigate = stream()

createApp(update, navigate).then(app => {
  const models = stream.scan(O, app.model, update)
  const states = models.map(app.service)
  states.map(pipe(app.view, render(document.getElementById("app"))))

  const defaultNavigateFn = () => ({ route, update }) => update({ route })
  const navigateFn = Route.fold(Object.assign(
    Object.keys(Route.of).reduce((result, key) => assoc(key, defaultNavigateFn, result), {}),
    app.navigate))

  navigate.map(route => navigateFn(route)({ model: models(), route, update }))

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  const meiosisTracer = require("meiosis-tracer")
  meiosisTracer({ streams: [
    //{ stream: models, label: "models" },
    { stream: navigate, label: "routes" },
    { stream: states, label: "states" }
  ] })
})
