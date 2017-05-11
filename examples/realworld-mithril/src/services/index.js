import m from "mithril";
import { merge } from "ramda";

//const API_ROOT = "https://conduit.productionready.io/api";
const API_ROOT = "http://localhost:4000/api";

const getToken = () => window.localStorage.getItem("jwt");
export const setToken = token => window.localStorage.setItem("jwt", token);

const authHeader = () => ({
  headers: {
    "Authorization": "Token " + getToken()
  }
});

export const articlesApi = {
  getList: data => m.request(API_ROOT + "/articles", { data }),
  getSingle: slug => m.request(API_ROOT + "/articles/" + slug),
  getComments: slug => m.request(API_ROOT + "/articles/" + slug + "/comments"),
  publish: data => m.request(API_ROOT + "/articles", merge(authHeader(), { data, method: "POST" }))
};

export const credentialsApi = {
  register: data => m.request(API_ROOT + "/users", { data, method: "POST" }),
  login: data => m.request(API_ROOT + "/users/login", { data, method: "POST" }),
  getUser: () => new Promise(resolve => {
    if (getToken()) {
      m.request(API_ROOT + "/user", authHeader()).then(user => resolve(user.user));
    }
    else {
      resolve({});
    }
  })
};

export const popularTagsApi = {
  get: () => m.request(API_ROOT + "/tags")
};

export const profileApi = {
  get: username => m.request(API_ROOT + "/profiles/" + username)
};
