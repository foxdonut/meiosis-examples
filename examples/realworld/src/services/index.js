import m from "mithril"

const API_ROOT = "https://conduit.productionready.io/api"
// const API_ROOT = "http://localhost:4000/api"

const getToken = () => window.localStorage.getItem("jwt")
export const setToken = token => window.localStorage.setItem("jwt", token)
export const clearToken = () => window.localStorage.removeItem("jwt")

const authHeader = () =>
  getToken()
    ? {
        headers: {
          Authorization: "Token " + getToken()
        }
      }
    : {}

const request = (url, options) =>
  m
    .request(Object.assign(options || {}, { url: API_ROOT + url }, authHeader()))
    .then(response => (response && response.data) || response)

/*
Parameters:

Filter by tag:
?tag=AngularJS

Filter by author:
?author=jake

Favorited by user:
?favorited=jake

Limit number of articles (default is 20):
?limit=10

Offset/skip number of articles (default is 0):
?offset=0

Returns:

{
  articles,
  articlesCount
}
 */
export const articlesApi = {
  getList: params => request("/articles", { params }),

  getFeed: params => request("/articles/feed", { params }),

  getSingle: slug => request(`/articles/${slug}`),

  getComments: slug => request(`/articles/${slug}/comments`),

  addComment: (slug, body) => request(`/articles/${slug}/comments`, { body, method: "POST" }),

  deleteComment: (slug, id) => request(`/articles/${slug}/comments/${id}`, { method: "DELETE" }),

  publish: (body, slug) =>
    request("/articles" + (slug ? "/" + slug : ""), { body, method: slug ? "PUT" : "POST" }),

  unpublish: slug => request(`/articles/${slug}`, { method: "DELETE" }),

  favorite: slug => request(`/articles/${slug}/favorite`, { method: "POST" }),

  unfavorite: slug => request(`/articles/${slug}/favorite`, { method: "DELETE" })
}

export const credentialsApi = {
  register: body => request("/users", { body, method: "POST" }),

  login: body => request("/users/login", { body, method: "POST" }),

  getUser: () =>
    new Promise((resolve, reject) => {
      if (getToken()) {
        return request("/user", authHeader())
          .then(user => resolve(user.user))
          .catch(reject)
      } else {
        resolve(null)
      }
    })
}

export const popularTagsApi = {
  getList: () => request("/tags")
}

export const profileApi = {
  get: username => request(`/profiles/${username}`),

  update: body => request("/user", { body, method: "PUT" }),

  follow: username => request(`/profiles/${username}/follow`, { method: "POST" }),

  unfollow: username => request(`/profiles/${username}/follow`, { method: "DELETE" })
}

export const loadArticles = params =>
  Promise.all([articlesApi.getList(params), popularTagsApi.getList()]).then(([articles, tags]) =>
    Object.assign(articles, tags)
  )

export const loadArticle = ({ slug }) =>
  Promise.all([articlesApi.getSingle(slug), articlesApi.getComments(slug)]).then(
    ([article, comments]) => Object.assign(article, comments)
  )
