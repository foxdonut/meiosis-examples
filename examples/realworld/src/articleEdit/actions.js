import validate from "validate.js"

import { articlesApi } from "../services"
import { Route } from "../routes"
import { pick } from "../util/fp"

const validationSpec = {
  body: { presence: { allowEmpty: false } },
  description: { presence: { allowEmpty: false } },
  title: { presence: { allowEmpty: false } }
}

export const Actions = update => ({
  updateArticleForm: (field, value) =>
    update({
      article: { [field]: value }
    }),

  updateArticleTags: tags =>
    update({
      article: {
        tags,
        tagList: (tags || "")
          .split(",")
          .map(str => str.trim())
          .filter(str => str.length > 0)
      }
    }),

  publish: article => {
    const validationErrors = validate(article, validationSpec)
    update({ article: { validationErrors } })
    if (!validationErrors) {
      articlesApi
        .publish(
          {
            article: pick(["title", "description", "body", "tagList"], article)
          },
          article.slug
        )
        .then(() => navigate({ route: Route.of.Home() }))
    }
  }
})
