import { Route } from "../router"
import { loadArticleAndComments } from "../services"
import { selectors } from "../state"

export const Effect = update => state => {
  if ([Route.ArticleDetail, Route.ArticleEdit].includes(selectors.page(state)) && state.loading) {
    const { slug } = selectors.params(state)
    loadArticleAndComments({ slug }).then(data =>
      update([data, { article: { tags: (data.article.tagList || []).join(", ") }, loading: false }])
    )
  }
}
