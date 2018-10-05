import { HomePage } from "../util/constants"

export const actions = ({ update, actions }) => ({
  navigateToHome: () => {
    update({ pageId: HomePage })
    actions.loadArticles()
  }
})
