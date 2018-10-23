import { ArticleEditPage } from "../util/router"
import { services } from "../root/services"

export const nextAction = update => (model, patch) => {
  if (patch.pageId === ArticleEditPage) {
    services.loadArticle(patch.params).then(data => update({ articleEdit: data }))
  }
}
