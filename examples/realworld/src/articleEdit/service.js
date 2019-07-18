import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { helpers } from "../root/helpers"

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "ArticleEdit"), ({ params: { slug } }) => {
    helpers
      .loadArticle({ slug })
      .then(data =>
        update(Object.assign(data, { article: { tags: (data.article.tagList || []).join(", ") } }))
      )
  })
}
