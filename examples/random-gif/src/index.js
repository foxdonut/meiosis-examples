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
meiosisTracer({ selector: "#tracer", autoSend: false, streams: [
//meiosisTracer({ streams: [
  { label: "models", stream: models, hist: false },
  { label: "states", stream: states, hide: true },
  { label: "newGif", stream: signals.newGif }
], rows: 9, listen: (stream, fn) => {
  console.log("listen")
  stream.map(fn)
}, emit: (stream, value) => {
  console.log("emit:", value)
  stream(value)
}, stringify: obj => {
  console.log("stringify")
  return JSON.stringify(obj, null, 2)
}, parse: str => {
  console.log("parse")
  return JSON.parse(str)
} })
