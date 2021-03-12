import m from "mithril"
import merge from "mergerino"
import stream from "mithril/stream"

import { app, App } from "./app"

// Only for using Meiosis Tracer in development.
import meiosisTracer from "meiosis-tracer"

const update = stream()
const states = stream.scan(merge, app.Initial(), update)
const actions = app.Actions(update)

const pathGet = (object, path) =>
  path.reduce((obj, key) => (obj == undefined ? undefined : obj[key]), object)

const intoPath = (path, value) => ({
  [path[0]]: path.length === 1 ? value : intoPath(path.slice(1), value)
})

const contextCache = {}
let root

const nest = prop => {
  if (prop) {
    const path = [].concat(prop)
    if (!contextCache[path]) {
      const getState = () => pathGet(states(), path)
      const localUpdate = patch => update(intoPath(path, patch))
      const localActions = app.Actions(localUpdate)

      contextCache[path] = {
        getState,
        update: localUpdate,
        actions: localActions,
        nest: next => nest(path.concat(next)),
        root
      }
    }
    return contextCache[path]
  }
  return root
}

root = {
  getState: () => states(),
  update,
  actions,
  nest,
  root
}

// Only for using Meiosis Tracer in development.
meiosisTracer({ selector: "#tracer", rows: 30, cols: 40, streams: [states] })

m.mount(document.getElementById("app"), {
  view: () => m(App, { context: nest() })
})

states.map(() => m.redraw())
