import { HomePage } from "../util/constants"

export const model = ({ user }) => ({
  pageId: HomePage,
  articlesFilter: {
    limit: 10,
    offset: 0,
    tag: "",
    author: "",
    favorited: ""
  },
  articleDetail: {},
  articleEdit: {},
  login: {},
  register: {},
  user
})
