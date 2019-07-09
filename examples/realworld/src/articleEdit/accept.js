import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { helpers } from "../root/helpers"

export const accept = state => [
  whenPresent(findRouteSegment(state.route.current, "ArticleCreate"),
    () => ({ article: { title: "", description: "", body: "", tags: "" } }))/*,
  whenPresent(findRouteSegment(state.route.current, "ArticleEdit"),
    ({ params: { slug } }) =>
    helpers.loadArticle({ slug }).then(data =>
      //FIXME
      update(
        P(data, navigation, { article: { tags: (data.article.tagList || []).join(", ") } })
      )
    )
  }
  */
]

