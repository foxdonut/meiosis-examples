import { compose, lensPath, merge, over, path } from "ramda";

export const nest = (update, path) => compose(update, over(lensPath(path)));

export const viewModel = model =>
  merge({
    signedIn: !!path(["user", "token"], model)
  }, model);

export const profileLink = (username, isFavorites) =>
  "#/profile/" + username + (isFavorites ? "/favorites" : "");

// Thrush combinator
export const T = (x, f) => f(x);
