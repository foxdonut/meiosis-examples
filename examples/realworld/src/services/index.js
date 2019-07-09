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
  getList: data => request("/articles", { data }),

  getFeed: data => request("/articles/feed", { data }),

  getSingle: slug => request(`/articles/${slug}`),

  getComments: slug => request(`/articles/${slug}/comments`),

  addComment: (slug, data) => request(`/articles/${slug}/comments`, { data, method: "POST" }),

  deleteComment: (slug, id) => request(`/articles/${slug}/comments/${id}`, { method: "DELETE" }),

  publish: (data, slug) =>
    request("/articles" + (slug ? "/" + slug : ""), { data, method: slug ? "PUT" : "POST" }),

  unpublish: slug => request(`/articles/${slug}`, { method: "DELETE" }),

  favorite: slug => request(`/articles/${slug}/favorite`, { method: "POST" }),

  unfavorite: slug => request(`/articles/${slug}/favorite`, { method: "DELETE" })
}

export const credentialsApi = {
  register: data => request("/users", { data, method: "POST" }),

  login: data => request("/users/login", { data, method: "POST" }),

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

  update: data => request("/user", { data, method: "PUT" }),

  follow: username => request(`/profiles/${username}/follow`, { method: "POST" }),

  unfollow: username => request(`/profiles/${username}/follow`, { method: "DELETE" })
}
