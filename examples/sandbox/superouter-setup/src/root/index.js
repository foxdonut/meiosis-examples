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
    home: Home,
    settings: Settings,
  },
  model,
  service,
  view
}
