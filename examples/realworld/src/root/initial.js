export const Initial = data =>
  Object.assign(
    {
      articlesFilter: {
        limit: 10,
        offset: 0,
        tag: "",
        author: "",
        favorited: ""
      },
      loading: true,
      login: {},
      register: {},
      settings: {}
    },
    data
  )
