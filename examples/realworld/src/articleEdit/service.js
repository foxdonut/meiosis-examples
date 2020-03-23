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
      article: { validationErrors: [] }
    }
  }
}
