import { loadArticleAndComments } from "../services"
import { selectors } from "../selectors"

export const ArticleCreateEffect = update => () => {
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
}

export const ArticleViewEffect = update => state => {
  const { slug } = selectors.params(state)
  loadArticleAndComments({ slug }).then(data =>
    update([data, { article: { tags: (data.article.tagList || []).join(", ") } }])
  )
}
