import { createRoutes } from "./routes"
import { createState } from "./state"
import { createHeader, createFooter } from "../layout"
import { credentialsApi } from "../services"

export const createApp = update => Promise.all([
  credentialsApi.getUser()
]).then(([user]) => {
  const navigator = createRoutes(update)

  const header = createHeader({ navigator, update })
  const footer = createFooter({ navigator, update })

  return {
    model: () => ({
      articleDetail: {},
      articleEdit: {},
      login: {},
      register: {},
      context: { user }
    }),

    state: createState(),

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
