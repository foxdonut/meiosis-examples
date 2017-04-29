import m from "mithril";

const API_ROOT = "https://conduit.productionready.io/api";

export const articlesApi = {
  getList: data => m.request(API_ROOT + "/articles", { data }),
  getSingle: slug => m.request(API_ROOT + "/articles/" + slug),
  getComments: slug => m.request(API_ROOT + "/articles/" + slug + "/comments")
};

export const credentialsApi = {
  register: data => m.request(API_ROOT + "/users", { data, method: "POST" }),
  login: data => m.request(API_ROOT + "/users/login", { data, method: "POST" })
};

export const popularTagsApi = {
  get: () => m.request(API_ROOT + "/tags")
};

export const profileApi = {
  get: username => m.request(API_ROOT + "/profiles/" + username)
};
