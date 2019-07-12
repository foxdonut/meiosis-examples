import { choose } from "../util/fp"

// synchronize articlesFilter
export const accept = state =>
  state.query
    ? {
        articlesFilter: Object.assign(
          choose(["offset", "author", "favorited"], state.query),
          { tag: state.query.tag }
        )
      }
    : null
