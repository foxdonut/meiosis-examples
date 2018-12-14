import { P, PS } from "patchinko/explicit"
import { choose } from "../util/fp"

// synchronize articlesFilter
export const service = state => state.query ?
  ({ articlesFilter: PS(
    P(
      choose(["offset", "author", "favorited"], state.query),
      { tag: state.query.tag }
    ))
  })
  : null
