const m = require("mithril")
const stream = require("mithril/stream")

const { createApp } = require("./app")
const { h } = require("./util/ui")

const update = stream()
const app = createApp(update)
const models = stream.scan(app.onUpdate, app.model(), update)
const states = models.map(app.state)

const element = document.getElementById("app")
states.map(state => m.render(element, h(app.view(state))))

// Only for using Meiosis Tracer in development.
const meiosisTracer = require("meiosis-tracer")
meiosisTracer({ selector: "#tracer", rows: 8, streams: [
  { label: "update", stream: update },
  { label: "models", stream: models },
  { label: "states", stream: states }
] })
