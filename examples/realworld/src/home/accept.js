import { findRouteSegment } from "meiosis-routing/state"

export const accept = state => {
  const arrive = findRouteSegment(state.route.arrive, "Home")

  if (arrive) {
    return { articlesFilter: { tag: arrive.params.tag } }
  }
}
/*null (state, patch) => {
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
*/
