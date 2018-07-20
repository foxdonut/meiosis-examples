import { createNavigator } from "../navigator"
import { HomePage, LoginPage, RegisterPage } from "../util/constants"
import { nestCreateComponent } from "../util"
import { createHeader, createFooter } from "../layout"
import { createHome } from "../home"
import { createLogin } from "../login"
import { createRegister } from "../register"
import { createNotFound } from "../notFound"

export const createApp = update => {
  const navigator = createNavigator(update)

  const header = createHeader(navigator)(update)
  const footer = createFooter(navigator)(update)

  navigator.register([
    { key: HomePage,
      component: createHome(navigator)(update),
      route: "/"
    },
    { key: RegisterPage,
      component: nestCreateComponent(createRegister(navigator), update, ["register"]),
      route: "/register"
    },
    { key: LoginPage,
      component: nestCreateComponent(createLogin(navigator), update, ["login"]),
      route: "/login"
    }
  ], createNotFound(navigator)(update))

  navigator.start()

  return {
    navigator,
    view: model => {
      const component = navigator.getComponent(model.pageId)

      return ["div",
        header.view(model),
        component.view(model),
        footer.view(model)
      ]
    }
  }
}
