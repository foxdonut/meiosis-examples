import O from "patchinko/constant"
import { createRoutes } from "./routes"
import { createHeader, createFooter } from "../layout"
import { credentialsApi, articlesApi } from "../services"

export const createApp = update => Promise.all([
  credentialsApi.getUser()/*,
  articlesApi.getList()*/
]).then(([user/*, articles*/]) => {
  const navigator = createRoutes(update)

  const header = createHeader(navigator)(update)
  const footer = createFooter(navigator)(update)

  return {
    model: () => O(/*articles*/{}, {
      article: {},
      login: {},
      register: {},
      user,
      signedIn: !!user.token
    }),
    view: model => {
      const component = navigator.getComponent(model.pageId)

      return ["div",
        header.view(model),
        component.view(model),
        footer.view(model)
      ]
    }
  }
})
