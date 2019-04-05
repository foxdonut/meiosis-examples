import { HomePage } from "../util/router"

export const accept = (state, patch) => {
  if (patch.loading === HomePage && state.articles) {
    return null
  } else if (
    patch.pageId === HomePage &&
    state.user &&
    !patch.logout &&
    patch.feed !== false &&
    !(patch.params && patch.params.tag)
  ) {
    return Object.assign(patch, { feed: true })
  }
  return patch
}
