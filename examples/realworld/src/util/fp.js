import * as tf from "tinyfunk"

// Using reduce, courtesy Barney Carroll (https://github.com/barneycarroll)
export const get = (object, path) =>
  path.reduce((obj, key) => obj == undefined ? undefined : obj[key], object)

// Credit: https://medium.com/@jperasmus11/roll-your-own-async-compose-pipe-functions-658cafe4c46f
export const asyncPipe = (...fns) => input =>
  fns.reduce((chain, fn) => chain.then(fn), Promise.resolve(input))

export const range = (start, end) => {
  const arr = []
  for (var i = start; i < end; i++) {
    arr.push(i)
  }
  return arr
}

// Similar to pick, but don't return keys that are not in the object.
export const choose = (keys, obj) => !obj ? {} : keys.reduce((result, key) =>
  obj.hasOwnProperty(key) ? assoc(key, obj[key], result) : result, {})

export const assoc = tf.assoc
export const compose = tf.compose
export const constant = tf.constant
export const defaultTo = tf.defaultTo
export const omit = tf.omit
export const path = tf.path
export const pick = tf.pick
export const pipe = tf.pipe
export const prepend = tf.prepend
export const preventDefault = tf.tap(evt => evt.preventDefault())
export const tap = tf.tap
export const thrush = tf.thrush
