import { Routing } from "meiosis-routing/state"

import { Layout } from "../layout"
import { Home } from "../home"
import { Register } from "../register"
import { Login } from "../login"
import { ArticleDetail } from "../articleDetail"
import { ArticleEdit } from "../articleEdit"
import { Settings } from "../settings"
import { Profile } from "../profile"

const componentMap = {
  Home,
  Register,
  Login,
  ArticleDetail,
  ArticleCreate: ArticleEdit,
  ArticleEdit,
  Settings,
  Profile,
  ProfileFavorites: Profile
}

export const Root = ({ state, actions }) => {
  const routing = Routing(state.route.current)
  const Component = componentMap[routing.localSegment.id]
  return Layout({ state, actions, routing, Component })
}
