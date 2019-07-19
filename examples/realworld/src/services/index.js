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

export const articlesApi = {
  getList: params => request("/articles", { params }),

  getFeed: params => request("/articles/feed", { params }),

  getSingle: slug => request(`/articles/${slug}`),

  getComments: slug => request(`/articles/${slug}/comments`),

  addComment: (slug, params) => request(`/articles/${slug}/comments`, { params, method: "POST" }),

  deleteComment: (slug, id) => request(`/articles/${slug}/comments/${id}`, { method: "DELETE" }),

  publish: (params, slug) =>
    request("/articles" + (slug ? "/" + slug : ""), { params, method: slug ? "PUT" : "POST" }),

  unpublish: slug => request(`/articles/${slug}`, { method: "DELETE" }),

  favorite: slug => request(`/articles/${slug}/favorite`, { method: "POST" }),

  unfavorite: slug => request(`/articles/${slug}/favorite`, { method: "DELETE" })
}

export const credentialsApi = {
  register: params => request("/users", { params, method: "POST" }),

  login: params => request("/users/login", { params, method: "POST" }),

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

  update: params => request("/user", { params, method: "PUT" }),

  follow: username => request(`/profiles/${username}/follow`, { method: "POST" }),

  unfollow: username => request(`/profiles/${username}/follow`, { method: "DELETE" })
}
