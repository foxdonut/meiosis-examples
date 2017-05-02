import m from "mithril";
import { merge } from "ramda";

export const createView = (update, components) => ({
  view: vnode => {
    const model = vnode.attrs.model;

    return [
      model.articles.map(article => m(components.ArticleSummary, { model: article })),
      m(components.Pager, { model: merge({ total: model.articlesCount }, model.articlesFilter) })
    ];
  }
});
