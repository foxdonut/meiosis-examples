import { merge } from "ramda";

import { articlesApi, profileApi } from "../services";

export const createActions = update => ({
  loadProfile: username => profileApi.get(username).
    then(profile => { console.log("profile:", profile); update(model => { const m = merge(model, profile); console.log("p", m); return m; } ); }),

  loadArticles: username => articlesApi.get({ author: username, limit: 10 }).
    then(articles => { console.log("profile articles:", articles); update(model => { const m = merge(model, articles); console.log("pa", m); return m; } ); })
    /*
  loadProfile: username => profileApi.get(username).
    then(profile => update(model => merge(model, profile))),

  loadArticles: username => articlesApi.get({ author: username, limit: 10 }).
    then(articles => update(model => merge(model, articles)))
    */
});
