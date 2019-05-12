import { Loaded, Success, Image } from "./types"
import { Actions, reset } from "./actions"

export const randomGif = {
  Initial: () => ({
    image: Loaded.Y(Success.Y(Image.N())),
    tag: ""
  }),
  Actions,
  reset
}

export { RandomGif } from "./view"
