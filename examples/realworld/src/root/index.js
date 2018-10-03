import { createState } from "./state"
import { Header, Footer } from "../layout"

export const Root = {
  dependencies: {
    navigator: Navigator,
    header: Header,
    footer: Footer
  },
  model: ({ user }) => ({
    articleDetail: {},
    articleEdit: {},
    login: {},
    register: {},
    user
  }),
  state: createState(),

  view: ({ navigator, header, footer }) => model => {
    const component = navigator.getComponent(model.pageId)

    return ["div",
      header(model),
      component(model),
      footer(model)
    ]
  }
}
