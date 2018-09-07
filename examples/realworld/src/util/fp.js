import { compose, constant, defaultTo, omit, path, pipe, tap, thrush } from "tinyfunk"

// Credit: http://www.tomharding.me/2016/11/12/curry-on-wayward-son/
const uncurry = func => {
  if (typeof func !== "function") {
    return func
  }
  return (...xs) => uncurry(xs.reduce((func, x) => func(x), func))
}

module.exports = {
  compose,
  constant,
  defaultTo,
  omit,
  path,
  pipe,
  preventDefault: tap(evt => evt.preventDefault()),
  tap,
  thrush
}
