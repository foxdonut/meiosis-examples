import { HomePage } from "../util/router"

export const accept = (model, patch) => {
  if (patch.loading === HomePage && model.articles) {
    return null
  }
  return patch
}

