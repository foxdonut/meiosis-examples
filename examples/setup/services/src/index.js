import m from "mithril"
import merge from "mergerino"
import stream from "mithril/stream"

import { app, App } from "./app"

const dropRepeats = (states, selector = state => state) => {
  let prev = undefined
  const result = stream()

  states.map(state => {
    const next = selector(state)
    if (next !== prev) {
      prev = next
      result(state)
    }
  })
  return result
}

const update = stream()
const states = stream.scan(merge, app.initial, update)

app.services.forEach(service => {
  dropRepeats(states, service.onchange).map(state => service.run({ state, update }))
})

const cells = dropRepeats(states).map(state => ({ state, update }))

// vv Only for using Meiosis Tracer in development.
// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"
meiosisTracer({ selector: "#tracer", rows: 25, streams: [states] })
// ^^ Only for using Meiosis Tracer in development.

m.mount(document.getElementById("app"), {
  view: () => m(App, { cell: cells() })
})

states.map(() => m.redraw())
