import { loadArticleAndComments } from "../services"
import { Route } from "../router"

export const Effect = update => state => {
  if (state.route.page === Route.ArticleCreate) {
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
  } else if ([Route.ArticleDetail, Route.ArticleEdit].includes(state.route.page)) {
    const { slug } = state.route.params
    loadArticleAndComments({ slug }).then(data =>
      update([data, { article: { tags: (data.article.tagList || []).join(", ") } }])
    )
  }
}
