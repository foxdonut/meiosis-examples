import O from "patchinko/constant"

import { Home } from "../home"

export const model = ({ user }) => O({
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
}, Home.navigateTo())
