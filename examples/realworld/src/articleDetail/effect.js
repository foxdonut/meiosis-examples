import { loadArticleAndComments } from "../services"

export const effect = ({ state, update }) => {
  if (state.routeTransition.arrive.ArticleDetail) {
    const { slug } = state.routeTransition.arrive.ArticleDetail.params
    loadArticleAndComments({ slug }).then(data => update([data, { loading: false }]))
  }
}
