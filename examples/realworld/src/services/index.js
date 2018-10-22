import O from "patchinko/constant"
import m from "mithril"

// const API_ROOT = "https://conduit.productionready.io/api"
const API_ROOT = "http://localhost:4000/api"

const request = (url, options) =>
  m.request(O(options || {}, { url: API_ROOT + url }))
    .then(response => (response && response.data) || response)

const getToken = () => window.localStorage.getItem("jwt")
export const setToken = token => window.localStorage.setItem("jwt", token)

const authHeader = () => ({
  headers: {
    "Authorization": "Token " + getToken()
  }
})

export const articlesApi = {
  getList: data => request("/articles", { data }),

  getFeed: data => request("/articles/feed", O(authHeader(), { data })),

  getSingle: slug => request(`/articles/${slug}`),

  getComments: slug => request(`/articles/${slug}/comments`),

  addComment: (slug, data) => request(`/articles/${slug}/comments`,
    O(authHeader(), { data, method: "POST" })),

  deleteComment: (slug, id) => request(`/articles/${slug}/comments/${id}`,
    O(authHeader(), { method: "DELETE" })),

  publish: data => request("/articles" + (data.article.slug ? "/" + data.article.slug : ""),
    O(authHeader(), { data, method: (data.article.slug ? "PUT" : "POST") })),

  unpublish: slug => request(`/articles/${slug}`, O(authHeader(), { method: "DELETE" })),

  favorite: slug => request(`/articles/${slug}/favorite`,
    O(authHeader(), { method: "POST" })),

  unfavorite: slug => request(`/articles/${slug}/favorite`,
    O(authHeader(), { method: "DELETE" }))
}

export const credentialsApi = {
  register: data => request("/users", { data, method: "POST" }),

  login: data => request("/users/login", { data, method: "POST" }),

  getUser: () => new Promise((resolve, reject) => {
    if (getToken()) {
      return request("/user", authHeader()).then(user => resolve(user.user))
        .catch(reject)
    }
    else {
      resolve(null)
    }
  })
}

export const popularTagsApi = {
  getList: () => request("/tags")
}

export const profileApi = {
  get: username => request(`/profiles/${username}`),

  update: data => request("/user", O(authHeader(), { data, method: "PUT" })),

  follow: username => request(`/profiles/${username}/follow`,
    O(authHeader(), { method: "POST" })),

  unfollow: username => request(`/profiles/${username}/follow`,
    O(authHeader(), { method: "DELETE" }))
}
