import { helpers } from "../root/helpers"

export const Actions = update => ({
  loadArticles: params =>
    helpers
      .loadArticles(params)
      .then(data => update([{ articlesFilter: params }, data]))
})
