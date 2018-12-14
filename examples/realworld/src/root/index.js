import { initialState } from "./initialState"
import { service } from "./service"
import { view } from "./view"
import { Header, Footer } from "../layout"
import { Home } from "../home"
import { Register } from "../register"
import { Login } from "../login"
import { ArticleDetail } from "../articleDetail"
import { ArticleEdit } from "../articleEdit"
import { Settings } from "../settings"
import { Profile } from "../profile"

export const Root = {
  dependencies: {
    header: Header,
    footer: Footer,
    Home,
    Register,
    Login,
    ArticleDetail,
    ArticleEdit,
    ArticleCreate: ArticleEdit,
    Settings,
    Profile,
    ProfileFavorites: Profile
  },
  initialState,
  service,
  view
}
