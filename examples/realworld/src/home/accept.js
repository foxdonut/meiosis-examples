import { HomePage } from "../util/router"

export const accept = (model, patch) => {
  if (patch.loading === HomePage && model.articles) {
    return null
  }
  else if (patch.pageId === HomePage && model.user && !patch.logout && patch.feed !== false &&
    !(patch.params && patch.params.tag))
  {
    return Object.assign(patch, { feed: true })
  }
  return patch
}
