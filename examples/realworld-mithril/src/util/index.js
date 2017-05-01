import m from "mithril";
import { compose, lensPath, merge, over, path } from "ramda";

export const nest = (update, path) => compose(update, over(lensPath(path)));

export const mlink = () => ({
  oncreate: m.route.link,
  onupdate: m.route.link
});

export const viewModel = model =>
  merge({
    signedIn: !!path(["user", "token"], model)
  }, model);
