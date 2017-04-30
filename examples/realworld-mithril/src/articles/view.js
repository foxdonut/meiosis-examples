import m from "mithril";

export const createView = (update, components) => ({
  view: vnode => {
    const model = vnode.attrs.model;

    return model.articles.map(article => m(components.ArticleSummary, { model: article }));
  }
});
