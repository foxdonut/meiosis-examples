import m from "mithril";
import * as R from "ramda";

import { createActions } from "./actions";
import { createView } from "./view";
import { nest } from "../util";

export const credentials = {
  create: (update, options) => {
    const { path, method } = options;

    const Component = createView(
      createActions(nest(update, path), method),
      options
    );

    return {
      view: vnode => m(Component, { model: R.path(path, vnode.attrs.model) })
    };
  }
};
