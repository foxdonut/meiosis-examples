import { helpers } from "../root/helpers"

export const navigate = {
  ArticleDetail: ({ slug }) => ({ route, update }) => {
    helpers.loadArticle({ slug }).then(data =>
      update(Object.assign(data, { route })))
  }
}
