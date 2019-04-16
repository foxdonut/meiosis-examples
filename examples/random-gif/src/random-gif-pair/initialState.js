import { randomGif } from "../random-gif"

export const initialState = () => ({
  First: randomGif.initialState(),
  Second: randomGif.initialState()
})
