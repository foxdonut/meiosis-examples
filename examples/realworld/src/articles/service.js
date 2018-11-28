import O from "patchinko/constant"
import { choose } from "../util/fp"

// synchronize articlesFilter
export const service = model => model.query ?
  ({ articlesFilter: O(
    Object.assign(
      choose(["offset", "author", "favorited"], model.query),
      { tag: model.query.tag }
    ))
  })
  : null
