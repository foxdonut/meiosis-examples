import R from "ramda";

export const bindParams = (fn, params) => args => fn(Object.assign(params, args));

export const nestUpdate = (update, prop) => func => update(R.over(R.lensProp(prop), func));
