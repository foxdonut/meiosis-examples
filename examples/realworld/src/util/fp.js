import { compose, constant, propPathOr, tap } from "crocks"

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
  path: uncurry(path => obj => fallback => propPathOr(fallback, path, obj)),
  preventDefault: tap(evt => evt.preventDefault()),
  tap
}
