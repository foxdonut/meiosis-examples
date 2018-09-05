import { compose, constant, defaultTo, path, tap } from "tinyfunk"

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
  path,
  preventDefault: tap(evt => evt.preventDefault()),
  tap
}
