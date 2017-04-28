import { mergeAll } from "ramda";

import { articlesApi } from "../services";

export const createActions = update => ({
  globalFeed: evt => {
    evt && evt.preventDefault();
    articlesApi.get({ limit: 10 }).then(
      articles => { console.log("home articles:", articles); update(model => { const m = mergeAll([ model, articles, { tagFilter: "" } ]); console.log("home", m); return m; } ); }
    );
    /*
    articlesApi.get({ limit: 10 }).then(
      articles => update(model => mergeAll([ model, articles, { tagFilter: "" } ]))
    );
    */
  }
});
