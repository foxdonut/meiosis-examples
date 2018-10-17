import O from "patchinko/constant"

import { SettingsPage } from "../util/constants"
import { Home } from "../home"

export const accumulator = (model, update) => {
  if (update.pageId === SettingsPage && !model.user) {
    return O(model, Home.navigateTo())
  }
  return O(model, update)
}
