import { helpers } from "../root/helpers"

export const Actions = update => ({
  loadArticles: params => {
    update({ loading: true })
    helpers
      .loadArticles(params)
      .then(data => update([{ articlesFilter: params, loading: false }, data]))
  }
})
