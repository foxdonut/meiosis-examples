import _ from "lodash";

import { articlesApi, profileApi } from "realworld-services";

const getFilter = (username, isFavorites) =>
  isFavorites ? { favorited: username } : { author: username };

export const createActions = update => ({
  loadProfile: username => profileApi.get(username).then(
    profile => update(model => _.merge(model, profile))
  ),

  loadArticles: (username, isFavorites) =>
    articlesApi.getList(_.merge({ limit: 10 }, getFilter(username, isFavorites))).then(
      articles => update(model => _.merge(model, articles))
    )
});
