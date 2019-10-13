import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { loadArticleAndComments } from "../services"

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "ArticleEdit"), ({ params: { slug } }) => {
    loadArticleAndComments({ slug }).then(data =>
      update(Object.assign(data, { article: { tags: (data.article.tagList || []).join(", ") } }))
    )
  })
}
