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
  const Component = componentMap[state.route.page]
  return Layout({ state, actions, Component })
}
