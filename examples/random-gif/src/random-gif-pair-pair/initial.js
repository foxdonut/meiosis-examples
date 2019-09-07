import { randomGifPair } from "../random-gif-pair"

export const Initial = id => {
  const id1 = id + ":One"
  const id2 = id + ":Two"

  return Object.assign({}, randomGifPair.Initial(id1), randomGifPair.Initial(id2))
}
