import { compose, lensPath, merge, over, path } from "ramda";

export const nest = (update, path) => compose(update, over(lensPath(path)));

export const viewModel = model =>
  merge({
    signedIn: !!path(["user", "token"], model)
  }, model);
