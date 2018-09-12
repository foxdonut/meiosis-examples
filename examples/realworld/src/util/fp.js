import { compose, constant, defaultTo, omit, path, pick, pipe, tap, thrush } from "tinyfunk"

// Credit: http://www.tomharding.me/2016/11/12/curry-on-wayward-son/
const uncurry = func => {
  if (typeof func !== "function") {
    return func
  }
  return (...xs) => uncurry(xs.reduce((func, x) => func(x), func))
}

// Using reduce, courtesy Barney Carroll (https://github.com/barneycarroll)
const get = (object, path) =>
  path.reduce((obj, key) => obj == undefined ? undefined : obj[key], object)

// Credit: https://medium.com/@jperasmus11/roll-your-own-async-compose-pipe-functions-658cafe4c46f
const asyncPipe = (...fns) => input =>
  fns.reduce((chain, fn) => chain.then(fn), Promise.resolve(input))

module.exports = {
  asyncPipe,
  compose,
  constant,
  defaultTo,
  get,
  omit,
  path,
  pick,
  pipe,
  preventDefault: tap(evt => evt.preventDefault()),
  tap,
  thrush
}
