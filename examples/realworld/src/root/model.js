export const model = data => Object.assign({
  articlesFilter: {
    limit: 10,
    offset: 0,
    tag: "",
    author: "",
    favorited: ""
  },
  login: {},
  register: {},
  settings: {}
}, data)
