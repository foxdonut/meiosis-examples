import O from "patchinko/constant"
import { helpers } from "../root/helpers"

export const actions = ({ update }) => ({
  loadArticles: params => helpers.loadArticles(params).then(data =>
    update(Object.assign({ articlesFilter: O(params) }, data)))
})