import { ArticleDetailPage } from "../util/router"
import { services } from "../root/services"

export const nextAction = update => (model, patch) => {
  if (patch.pageId === ArticleDetailPage) {
    services.loadArticle(patch.params).then(data => update({ articleDetail: data }))
  }
}
