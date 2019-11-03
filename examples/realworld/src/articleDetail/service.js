import { loadArticleAndComments } from "../services"

export const service = ({ state }) => {
  if (state.routeTransition.arrive.ArticleDetail) {
    return {
      state: { loading: true },
      next: ({ update }) => {
        const { slug } = state.routeTransition.arrive.ArticleDetail.params
        loadArticleAndComments({ slug }).then(data => update([data, { loading: false }]))
      }
    }
  }
}
