import { assoc, compose, constant, defaultTo, omit, path, pick, pipe, tap, thrush } from "tinyfunk"

// Using reduce, courtesy Barney Carroll (https://github.com/barneycarroll)
const get = (object, path) =>
  path.reduce((obj, key) => obj == undefined ? undefined : obj[key], object)

// Credit: https://medium.com/@jperasmus11/roll-your-own-async-compose-pipe-functions-658cafe4c46f
const asyncPipe = (...fns) => input =>
  fns.reduce((chain, fn) => chain.then(fn), Promise.resolve(input))

module.exports = {
  assoc,
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
