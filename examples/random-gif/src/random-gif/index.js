import { Loaded, Success, Image } from "./types"
import { actions, reset } from "./actions"

export const randomGif = {
  initialState: () => ({
    image: Loaded.Y(Success.Y(Image.N())),
    tag: ""
  }),
  actions,
  reset
}

export { RandomGif } from "./view"
