import { Route } from "../router"
import { loadArticleAndComments } from "../services"

export const Effect = update => state => {
  if ([Route.ArticleDetail, Route.ArticleEdit].includes(state.route.page) && state.loading) {
    const { slug } = state.route.params
    loadArticleAndComments({ slug }).then(data =>
      update([data, { article: { tags: (data.article.tagList || []).join(", ") }, loading: false }])
    )
  }
}
