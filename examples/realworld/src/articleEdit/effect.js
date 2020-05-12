import { Route } from "../router"
import { loadArticleAndComments } from "../services"

export const Effect = update => state => {
  if (state.route.page === Route.ArticleEdit && state.article == null) {
    const { slug } = state.routeTransition.arrive.ArticleEdit.params
    loadArticleAndComments({ slug }).then(data =>
      update(Object.assign(data, { article: { tags: (data.article.tagList || []).join(", ") } }))
    )
  }
}
