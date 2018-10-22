import { HomePage, ArticleDetailPage, ProfilePage } from "../util/router"
import { services } from "./services"

// FIXME: compose nextAction into components
export const nextAction = update => (model, patch) => {
  if (patch.pageId === HomePage) {
    //FIXME: better handling of filter params
    services.loadArticles(model, patch.params).then(update)
  }
  else if (patch.pageId === ArticleDetailPage) {
    services.loadArticle(patch.params).then(update)
  }
  else if (patch.pageId === ProfilePage) {
    services.loadProfile(patch.params).then(update)
  }
}
