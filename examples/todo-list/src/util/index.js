import R from "ramda";

export const get = (model, ...paths) => R.path(R.flatten(paths), model);
