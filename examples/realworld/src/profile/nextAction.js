import { ProfilePage } from "../util/router"
import { services } from "../root/services"

export const nextAction = update => (model, patch) => {
  if (patch.pageId === ProfilePage) {
    services.loadProfile(patch.params).then(update)
  }
}
