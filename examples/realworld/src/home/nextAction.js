import { HomePage } from "../util/router"
import { services } from "../root/services"

export const nextAction = update => (model, patch) => {
  if (patch.pageId === HomePage) {
    //FIXME: better handling of filter params
    services.loadArticles(model, patch.params).then(update)
  }
}
