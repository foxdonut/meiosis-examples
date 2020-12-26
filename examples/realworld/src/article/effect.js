import { Route } from "../router"
import { loadArticleAndComments } from "../services"
import { selectors } from "../selectors"

export const Effect = update => state => {
  if (selectors.page(state) === Route.ArticleCreate && state.routeChanged) {
    update({
      routeChanged: false,
      article: {
        title: "",
        description: "",
        body: "",
        tags: "",
        tagList: [],
        validationErrors: []
      }
    })
  } else if (
    [Route.ArticleDetail, Route.ArticleEdit].includes(selectors.page(state)) &&
    state.routeChanged
  ) {
    const { slug } = selectors.params(state)
    loadArticleAndComments({ slug }).then(data =>
      update([
        data,
        { article: { tags: (data.article.tagList || []).join(", ") }, routeChanged: false }
      ])
    )
  }
}
