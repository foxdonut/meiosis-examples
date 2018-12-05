import { h } from "./seview-setup"

import { model } from "../common/model"
import { actions } from "../common/actions"
import { view } from "../common/view"

export const app = {
  model,
  actions
}

export const App = {
  view: ({ attrs: { model, actions } }) => h(view(model, actions))
}
