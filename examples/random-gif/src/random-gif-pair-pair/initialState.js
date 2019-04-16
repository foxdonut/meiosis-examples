import { randomGifPair } from "../random-gif-pair"

export const initialState = () => ({
  One: randomGifPair.initialState(),
  Two: randomGifPair.initialState()
})
