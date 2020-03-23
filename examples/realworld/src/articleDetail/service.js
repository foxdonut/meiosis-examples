export const service = ({ state }) => {
  if (state.routeTransition.arrive.ArticleDetail) {
    return { loading: true }
  }
}
