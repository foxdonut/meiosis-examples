import { Loaded, Success, Image } from "./types"

export const Initial = () => ({
  image: Loaded.Y(Success.Y(Image.N())),
  tag: ""
})
