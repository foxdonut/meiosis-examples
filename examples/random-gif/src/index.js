const O = require("patchinko/constant")
const m = require("mithril")
const stream = require("mithril/stream")

const { app, App } = require("./app")

const update = stream()
const models = stream.scan(O, app.model(), update)
const states = models.map(app.state)

// Only for using Meiosis Tracer in development.
const meiosisTracer = require("meiosis-tracer")
meiosisTracer({ selector: "#tracer", streams: [
  { label: "models", stream: models },
  { label: "states", stream: states }
] })
states.map(() => m.redraw())
// End of code for using Meiosis Tracer in development.

const actions = app.actions(update)
m.mount(document.getElementById("app"),
  { view: () => m(App, { model: states(), actions }) })
