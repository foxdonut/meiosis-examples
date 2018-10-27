import O from "patchinko/constant"

import { ArticleEditPage } from "../util/router"
import { helpers } from "../root/helpers"

export const nextAction = update => (_model, patch) => {
  if (patch.pageId === ArticleEditPage) {
    helpers.loadArticle(patch.params).then(data =>
      update(O(data, { article: O({ tags: (data.article.tagList || []).join(", ") }) })))
  }
}
