import O from "patchinko/constant"

import { ArticleEditPage } from "../util/router"
import { services } from "../root/services"

export const nextAction = update => (_model, patch) => {
  if (patch.pageId === ArticleEditPage) {
    services.loadArticle(patch.params).then(data =>
      update(O(data, { article: O({ tags: (data.article.tagList || []).join(", ") }) })))
  }
}
