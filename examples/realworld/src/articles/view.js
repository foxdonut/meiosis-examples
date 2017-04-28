export const createView = (update, components) => ({
  view: vnode => {
    const model = vnode.attrs.model;

    return model.articles.map(components.articleSummary);
  }
});

