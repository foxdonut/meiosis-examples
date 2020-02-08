import { loadArticleAndComments } from "../services"

export const service = ({ state }) => {
  if (state.routeTransition.arrive.ArticleCreate) {
    return {
      article: {
        title: "",
        description: "",
        body: "",
        tags: "",
        tagList: [],
        validationErrors: []
      }
    }
  }

  if (state.routeTransition.arrive.ArticleEdit) {
    return {
      article: { validationErrors: [] },
      // FIXME
      next: ({ update }) => {
        const { slug } = state.routeTransition.arrive.ArticleEdit.params
        loadArticleAndComments({ slug }).then(data =>
          update(
            Object.assign(data, { article: { tags: (data.article.tagList || []).join(", ") } })
          )
        )
      }
    }
  }
}
