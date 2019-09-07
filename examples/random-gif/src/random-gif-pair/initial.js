import { randomGif } from "../random-gif"

export const Initial = id => ({
  [id + ":First"]: randomGif.Initial(),
  [id + ":Second"]: randomGif.Initial()
})
