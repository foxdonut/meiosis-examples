import { HomePage, LoginPage, RegisterPage, ArticleDetailPage, ArticleEditPage }
  from "../util/constants"

import { createNavigator } from "../navigator"
import { nest } from "../util/nest"
import { createHome } from "../home"
import { createLogin } from "../login"
import { createRegister } from "../register"
import { createArticleDetail } from "../articleDetail"
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
    { key: ArticleDetailPage,
      component: nest(createArticleDetail, ["articleDetail"], { navigator, update }),
      route: "/article/:slug"
    },
    { key: ArticleEditPage,
      component: nest(createArticleEdit, ["articleEdit"], { navigator, update }),
      route: "/editor"
    }
  ], createNotFound({ navigator, update }))

  navigator.start()

  return navigator
}

