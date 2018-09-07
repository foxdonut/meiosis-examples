import { createNavigator } from "../navigator"
import { HomePage, LoginPage, RegisterPage, ArticleEditPage } from "../util/constants"
import { nest } from "../util/nest"
import { createHome } from "../home"
import { createLogin } from "../login"
import { createRegister } from "../register"
import { createArticleEdit } from "../articleEdit"
import { createNotFound } from "../notFound"

export const createRoutes = update => {
  const navigator = createNavigator(update)

  navigator.register([
    { key: HomePage,
      component: createHome(navigator)(update),
      route: "/"
    },
    { key: RegisterPage,
      component: nest(createRegister(navigator), update, ["register"]),
      route: "/register"
    },
    { key: LoginPage,
      component: nest(createLogin(navigator), update, ["login"]),
      route: "/login"
    },
    { key: ArticleEditPage,
      component: nest(createArticleEdit(navigator), update, ["article"]),
      route: "/editor"
    }
  ], createNotFound(navigator)(update))

  navigator.start()

  return navigator
}

