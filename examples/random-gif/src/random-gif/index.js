import { Loaded, Success, Image } from "./types"
import { actions } from "./actions"

export const randomGif = {
  initialState: () => ({
    image: Loaded.Y(Success.Y(Image.N())),
    tag: ""
  }),
  actions
}

export { RandomGif } from "./view"
