import stream from "mithril-stream"
import O from "patchinko/constant"

import { render } from "./util/view"
import { createApp } from "./app"

const update = stream()
createApp(update).then(app => {
  const models = stream.scan(O, app.model(), update)
  models.map(app.view).map(render(document.getElementById("app")))

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  const meiosisTracer = require("meiosis-tracer")
  meiosisTracer({ streams: [ models ] })
})
