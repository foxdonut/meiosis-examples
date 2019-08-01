import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { loadArticle } from "../services"

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "ArticleDetail"), arrive => {
    update({ loading: true })
    const { slug } = arrive.params
    loadArticle({ slug }).then(data => update([data, { loading: false }]))
  })
}
