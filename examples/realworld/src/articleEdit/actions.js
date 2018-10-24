import O from "patchinko/constant"
import validate from "validate.js"

import { articlesApi } from "../services"
import { HomePage, navigateTo } from "../util/router"
import { omit } from "../util/fp"

const validationSpec = {
  body: { presence: true },
  description: { presence: true },
  title: { presence: true }
}

export const actions = update => ({
  updateArticleForm: (field, value) => update({
    article: O({ [field]: value })
  }),
  updateArticleTags: tags => update({
    article: O({
      tags,
      tagList: (tags || "")
        .split(",")
        .map(str => str.trim())
        .filter(str => str.length > 0)
    })
  }),

  publish: article => evt => {
    evt.preventDefault()
    const validationErrors = validate(article, validationSpec)
    update({ article: O({ validationErrors }) })
    if (!validationErrors) {
      articlesApi.publish({ article: omit(["tags"], article) })
        .then(() => update(navigateTo(HomePage)))
    }
  }
})
