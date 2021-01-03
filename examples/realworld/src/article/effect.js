import { loadArticleAndComments } from "../services"
import { Route } from "../router"
import { selectors } from "../selectors"

export const Effect = update => state => {
  if (selectors.page(state) === Route.ArticleCreate) {
    update({
      article: {
        title: "",
        description: "",
        body: "",
        tags: "",
        tagList: [],
        validationErrors: []
      }
    })
  } else if ([Route.ArticleDetail, Route.ArticleEdit].includes(selectors.page(state))) {
    const { slug } = selectors.params(state)
    loadArticleAndComments({ slug }).then(data =>
      update([data, { article: { tags: (data.article.tagList || []).join(", ") } }])
    )
  }
}
