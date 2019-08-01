import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { loadArticle } from "../services"

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "ArticleEdit"), ({ params: { slug } }) => {
    loadArticle({ slug }).then(data =>
      update(Object.assign(data, { article: { tags: (data.article.tagList || []).join(", ") } }))
    )
  })
}
