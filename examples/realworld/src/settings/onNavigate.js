import { pick } from "../util/fp"
import { Route } from "../util/router"

export const onNavigate = {
  Settings: () => ({ model, update, navigation, navigate }) => {
    if (model.user) {
      update(Object.assign(
        { settings: pick(["email", "username", "image", "bio"], model.user) },
        navigation
      ))
    }
    else {
      navigate({ route: Route.of.Home() })
    }
  }
}
