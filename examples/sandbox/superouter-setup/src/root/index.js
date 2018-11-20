import { model } from "./model"
import { service } from "./service"
import { view } from "./view"
import { Header, Footer } from "../layout"
import { Home } from "../home"
import { Settings } from "../settings"

export const Root = {
  dependencies: {
    header: Header,
    footer: Footer,
    Home,
    Settings,
  },
  model,
  service,
  view
}
