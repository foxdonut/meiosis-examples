import O from "patchinko/constant"
import validate from "validate.js"

import { articlesApi } from "../services"
import { HomePage, navigateTo } from "../util/router"
import { pick } from "../util/fp"

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

  publish: article => {
    const validationErrors = validate(article, validationSpec)
    update({ article: O({ validationErrors }) })
    if (!validationErrors) {
      articlesApi.publish({
        article: pick(["title", "description", "body", "tagList"], article)
      }, article.slug).then(() => update(navigateTo(HomePage)))
    }
  }
})
