import { PS } from "patchinko/explicit"
import { helpers } from "../root/helpers"

export const actions = ({ update }) => ({
  loadArticles: params =>
    helpers
      .loadArticles(params)
      .then(data => update(Object.assign({ articlesFilter: PS(params) }, data)))
})
