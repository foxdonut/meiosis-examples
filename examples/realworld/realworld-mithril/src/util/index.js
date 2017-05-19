import m from "mithril";
import { assoc, compose, lensPath, merge, over, path as Rpath } from "ramda";

export const nest = (update, path) => compose(update, over(lensPath(path)));

export const nestComponent = (create, update, path) => {
  const view = create(nest(update, path));
  return compose(view, Rpath(path));
};

export const mlink = () => ({
  oncreate: m.route.link,
  onupdate: m.route.link
});

export const profileLink = (username, isFavorites) =>
  merge({ href: "/profile/" + username + (isFavorites ? "/favorites" : "") }, mlink());

const getTags = article => (article.tags && (typeof article.tags === "string")) ?
  (article.tags.replace(/,/g, " ").replace(/ {2,}/g, " ").replace(/ *$/, "").split(" "))
  : article.tagList;

export const viewModel = model =>
  merge(model, {
    signedIn: !!Rpath(["user", "token"], model),
    article: assoc("tagList", getTags(model.article), model.article)
  });

// Thrush combinator
export const T = (x, f) => f(x);
