import { ArticleDetailPage } from "../util/router"
import { helpers } from "../root/helpers"

export const nextAction = update => (model, patch) => {
  if (patch.pageId === ArticleDetailPage) {
    helpers.loadArticle(patch.params).then(update)
  }
}
