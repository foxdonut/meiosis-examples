const m = require("mithril")
const stream = require("mithril/stream")

const { createApp } = require("./app")
const { h } = require("./util/ui")

const update = stream()
const app = createApp(update)
const models = stream.scan((model, func) => func(model),
  app.model(), update)
const states = models.map(app.state)

const element = document.getElementById("app")
states.map(state => m.render(element, h(app.view(state))))

// Only for using Meiosis Tracer in development.
const meiosisTracer = require("meiosis-tracer")
const { signals } = require("./random-gif/signals")
meiosisTracer({ selector: "#tracer", streams: [
  { label: "models", stream: models },
  { label: "states", stream: states },
  { label: "newGif", stream: signals.newGif }
] })
