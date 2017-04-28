import m from "mithril";

const API_ROOT = "https://conduit.productionready.io/api";

export const articlesApi = {
  get: data => m.request(API_ROOT + "/articles", { data })
};

export const popularTagsApi = {
  get: () => m.request(API_ROOT + "/tags")
};

export const profileApi = {
  get: username => m.request(API_ROOT + "/profiles/" + username)
};
