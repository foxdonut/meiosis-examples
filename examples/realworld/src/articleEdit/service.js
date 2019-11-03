import { loadArticleAndComments } from "../services"

export const service = ({ state }) => {
  if (state.routeTransition.arrive.ArticleCreate) {
    return {
      state: {
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
  }

  if (state.routeTransition.arrive.ArticleEdit) {
    return {
      state: { article: { validationErrors: [] } },
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
