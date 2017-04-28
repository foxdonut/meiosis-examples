import { assoc, mergeAll } from "ramda";

import { articlesApi, popularTagsApi } from "../services";


export const createActions = update => ({
  loadPopularTags: () => popularTagsApi.get().then(
    popularTags => update(model => assoc("tags", popularTags.tags, model))
  ),

  tagFilter: tag => evt => {
    evt.preventDefault();
    articlesApi.get({ tag, limit: 10 }).then(
      articles => { console.log("tag articles:", articles); update(model => { const m = mergeAll([ model, { tagFilter: tag }, articles ]); console.log("t", m); return m; } ); } );
    /*
    articlesApi.get({ tag, limit: 10 }).then(
      articles => update(model => mergeAll([ model, { tagFilter: tag }, articles ]))
    );
      */
  }
});
