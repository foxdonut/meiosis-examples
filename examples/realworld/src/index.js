import stream from "mithril-stream"

import { pipe } from "./util/fp"
import { render } from "./util/view"
import { createApp } from "./app"

const update = stream()
const getState = stream()
createApp(update, getState).then(app => {
  const models = stream.scan(app.accumulator, app.model(), update)

  const states = models.map(app.state)
  states.map(pipe(app.view, render(document.getElementById("app"))))

  models.map(model => app.nextAction(model, update()))
  getState.map(f => f(states()))

  // Only for development, to use the Meiosis Tracer as a Chrome extension.
  const meiosisTracer = require("meiosis-tracer")
  meiosisTracer({ streams: [
    { stream: models, label: "models" },
    { stream: states, label: "states" }
  ] })
})

/*
const models = m.stream()
const update = m.stream()
const actions = m.stream()

update.map(incoming => {
  const patch = (typeof incoming === "function")
    ? incoming(models())
    : incoming

  if (patch) {
    actions(patch)
  }
})

const filter = (model, patch) => {
  if (patch.pageId === "Settings" && !model.user) {
    return { pageId: "Home" }
  }
  return patch
}
const patches = actions.map(patch => filter(models(), patch))
patches.map(patch => models(O(models(), patch)))

const state = models.map(x => x)
const states = models.map(state)

const nextAction = (state, patch) => {
  if (patch.pageId === "Home") {
    update({ loadArticles: true })
  }
}
states.map(state => nextAction(state, patches()))

models.map(p)

update({ init: true })
update({ duck: "quack" })
update(null)
update(false)
update(undefined)

update(model => ({ count: model.duck.length }))

update({ pageId: "Settings" })
*/
