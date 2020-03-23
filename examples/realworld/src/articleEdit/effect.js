import { loadArticleAndComments } from "../services"

export const effect = ({ state, update }) => {
  if (state.routeTransition.arrive.ArticleEdit) {
    const { slug } = state.routeTransition.arrive.ArticleEdit.params
    loadArticleAndComments({ slug }).then(data =>
      update(Object.assign(data, { article: { tags: (data.article.tagList || []).join(", ") } }))
    )
  }
}
