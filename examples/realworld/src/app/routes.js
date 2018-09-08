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
      component: createHome({ navigator, update }),
      route: "/"
    },
    { key: RegisterPage,
      component: nest(createRegister, ["register"], { navigator, update }),
      route: "/register"
    },
    { key: LoginPage,
      component: nest(createLogin, ["login"], { navigator, update }),
      route: "/login"
    },
    { key: ArticleEditPage,
      component: nest(createArticleEdit, ["article"], { navigator, update }),
      route: "/editor"
    }
  ], createNotFound({ navigator, update }))

  navigator.start()

  return navigator
}

