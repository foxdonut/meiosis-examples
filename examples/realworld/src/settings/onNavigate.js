import { pick } from "../util/fp"
import { Route } from "../util/router"

export const onNavigate = {
  Settings: () => ({ state, update, navigation, navigate }) => {
    if (state.user) {
      update(Object.assign(
        { settings: pick(["email", "username", "image", "bio"], state.user) },
        navigation
      ))
    }
    else {
      navigate({ route: Route.of.Home() })
    }
  }
}
