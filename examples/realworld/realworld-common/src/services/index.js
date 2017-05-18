import { assoc, defaultTo, merge, prop } from "ramda";

//const API_ROOT = "https://conduit.productionready.io/api";
const API_ROOT = "http://localhost:4000/api";

let ajax = null;
export const setAjax = _ajax => ajax = _ajax;

const request = (url, options) =>
  ajax(assoc("url", url, defaultTo({}, options))).then(prop("data"));

const getToken = () => window.localStorage.getItem("jwt");
export const setToken = token => window.localStorage.setItem("jwt", token);

const authHeader = () => ({
  headers: {
    "Authorization": "Token " + getToken()
  }
});

export const articlesApi = {
  getList: data => request(API_ROOT + "/articles", { data }),
  getSingle: slug => request(API_ROOT + "/articles/" + slug),
  getComments: slug => request(API_ROOT + "/articles/" + slug + "/comments"),
  addComment: (slug, data) => request(API_ROOT + "/articles/" + slug + "/comments",
    merge(authHeader(), { data, method: "POST" })),
  deleteComment: (slug, id) => request(API_ROOT + "/articles/" + slug + "/comments/" + id,
    merge(authHeader(), { method: "DELETE" })),
  publish: data => request(API_ROOT + "/articles" + (data.article.slug ? "/" + data.article.slug : ""),
    merge(authHeader(), { data, method: (data.article.slug ? "PUT" : "POST") }))
};

export const credentialsApi = {
  register: data => request(API_ROOT + "/users", { data, method: "POST" }),
  login: data => request(API_ROOT + "/users/login", { data, method: "POST" }),
  getUser: () => new Promise(resolve => {
    if (getToken()) {
      request(API_ROOT + "/user", authHeader()).then(user => resolve(user.user));
    }
    else {
      resolve({});
    }
  })
};

export const popularTagsApi = {
  get: () => request(API_ROOT + "/tags")
};

export const profileApi = {
  get: username => request(API_ROOT + "/profiles/" + username)
};
