import validate from "validate.js"

import { articlesApi } from "../services"
import { HomePage } from "../util/constants"
import { omit } from "../util/fp"

const validationSpec = {
  body: { presence: true },
  description: { presence: true },
  title: { presence: true }
}

export const createActions = ({ navigator, update }) => ({
  updateForm: field => evt => update(model => {
    model[field] = evt.target.value

    model.tagList = (model.tags || "")
      .split(",")
      .map(str => str.trim())
      .filter(str => str.length > 0)

    return model
  }),

  publish: article => evt => {
    evt.preventDefault()
    const validationErrors = validate(article, validationSpec)
    update({ validationErrors })
    if (!validationErrors) {
      articlesApi.publish({ article: omit(["tags"], article) })
        .then(() => navigator.navigateTo(HomePage))
    }
  }
})
