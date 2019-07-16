import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { helpers } from "../root/helpers"

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "ArticleDetail"), arrive => {
    const { slug } = arrive.params
    helpers.loadArticle({ slug }).then(update)
  })
}

