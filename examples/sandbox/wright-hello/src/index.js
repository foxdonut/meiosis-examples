import m from 'mithril'
import stream from 'mithril/stream'

import { createTemperature } from './temperature'

const update = stream()

const app = createTemperature(update)

const models = stream.scan(
  (model, modelUpdate) => modelUpdate(model), 
  app.model(), 
  update
)

const render = model => 
  m.render(document.body, app.view(model))

models.map(render)

export { update, models, render }