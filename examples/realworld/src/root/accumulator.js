import O from "patchinko/constant"

import { HomePage, SettingsPage } from "../util/constants"

export const accumulator = (model, update) => {
  if (typeof update === "function") {
    return O(model, update(model))
  }
  if (update.pageId === SettingsPage && !model.user) {
    return O(model, { pageId: HomePage })
  }
  return O(model, update)
}
