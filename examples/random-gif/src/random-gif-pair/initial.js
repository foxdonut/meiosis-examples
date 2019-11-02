import { randomGif } from "../random-gif"

export const Initial = id => ({
  [id + ":First"]: randomGif.initial,
  [id + ":Second"]: randomGif.initial
})
