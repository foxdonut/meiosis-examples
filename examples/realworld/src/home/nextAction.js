import { HomePage } from "../util/router"
import { services } from "../root/services"

export const nextAction = update => (model, patch) => {
  if (patch.pageId === HomePage) {
    services.loadArticles(model, patch.params).then(update)
  }
}
