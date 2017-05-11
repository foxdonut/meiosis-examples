import m from "mithril";
import { assoc, compose, lensPath, merge, over, path as Rpath } from "ramda";

export const nest = (update, path) => compose(update, over(lensPath(path)));

export const nestComponent = (create, update, path) => {
  const Component = create(nest(update, path));
  return { view: vnode => m(Component, { model: Rpath(path, vnode.attrs.model) })};
};

export const mlink = () => ({
  oncreate: m.route.link,
  onupdate: m.route.link
});

export const profileLink = (username, isFavorites) =>
  merge({ href: "/profile/" + username + (isFavorites ? "/favorites" : "") }, mlink());

const getTags = article => (typeof article.tags === "string") ?
  (article.tags.replace(/,/g, " ").replace(/ {2,}/g, " ").replace(/ *$/, "").split(" "))
  : article.tagList;

export const viewModel = model =>
  merge(model, {
    signedIn: !!Rpath(["user", "token"], model),
    article: assoc("tagList", getTags(model.article), model.article)
  });

// Thrush combinator
export const T = (x, f) => f(x);
