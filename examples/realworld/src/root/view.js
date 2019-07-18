import { Routing } from "meiosis-routing/state"

import { Header, Footer } from "../layout"
import { Home } from "../home"
import { Register } from "../register"
import { Login } from "../login"
import { ArticleEdit } from "../articleEdit"
import { Settings } from "../settings"
import { Profile } from "../profile"

const componentMap = {
  Home,
  Register,
  Login,
  ArticleCreate: ArticleEdit,
  ArticleEdit,
  Settings,
  Profile
}

export const Root = ({ state, actions }) => {
  const routing = Routing(state.route.current)
  const Component = componentMap[routing.localSegment.id]

  return [
    "div",
    Header({ state, routing }),
    Component({ state, actions, routing }),
    Footer(),
    ["pre", JSON.stringify(state, null, 2)],
    ["pre", JSON.stringify(routing, null, 2)]
  ]
}
