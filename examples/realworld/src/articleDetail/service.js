import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { loadArticleAndComments } from "../services"

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "ArticleDetail"), arrive => {
    update({ loading: true })
    const { slug } = arrive.params
    loadArticleAndComments({ slug }).then(data => update([data, { loading: false }]))
  })
}
