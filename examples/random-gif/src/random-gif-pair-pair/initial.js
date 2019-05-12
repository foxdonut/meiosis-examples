import { randomGifPair } from "../random-gif-pair"

export const Initial = () => ({
  One: randomGifPair.Initial(),
  Two: randomGifPair.Initial()
})
