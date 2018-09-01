import stream from "mithril-stream"
import O from "patchinko/constant"

import { render } from "./util/view"
import { createApp } from "./app"

const update = stream()
const app = createApp(update)
const models = stream.scan(O, app.model(), update)

models.map(app.view).map(render(document.getElementById("app")))

// Only for development, to use the Meiosis Tracer as a Chrome extension.
import meiosisTracer from "meiosis-tracer"
meiosisTracer({ streams: [ models ] })
