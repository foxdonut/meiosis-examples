import { merge } from "ramda";

import { articlesApi, profileApi } from "../services";

const getFilter = (username, isFavorites) =>
  isFavorites ? { favorited: username } : { author: username };

export const createActions = update => ({
  loadProfile: username => profileApi.get(username).then(
    profile => update(model => merge(model, profile))
  ),

  loadArticles: (username, isFavorites) =>
    articlesApi.getList(merge({ limit: 10 }, getFilter(username, isFavorites))).then(
      articles => update(model => merge(model, articles))
    )
});
