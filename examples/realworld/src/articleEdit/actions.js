import validate from "validate.js"

import { articlesApi } from "../services"
import { Route, routeTo } from "../router"
import { pick } from "../util/fp"

const validationSpec = {
  body: { presence: { allowEmpty: false } },
  description: { presence: { allowEmpty: false } },
  title: { presence: { allowEmpty: false } }
}

export const actions = {
  updateArticleForm: (cell, field, value) =>
    cell.update({
      article: { [field]: value }
    }),

  updateArticleTags: (cell, tags) =>
    cell.update({
      article: {
        tags,
        tagList: (tags || "")
          .split(",")
          .map(str => str.trim())
          .filter(str => str.length > 0)
      }
    }),

  publish: (cell, article) => {
    const validationErrors = validate(article, validationSpec)
    cell.update({ article: { validationErrors } })
    if (!validationErrors) {
      articlesApi
        .publish(
          {
            article: pick(["title", "description", "body", "tagList"], article)
          },
          article.slug
        )
        .then(() => cell.update(routeTo(Route.Home)))
    }
  }
}
