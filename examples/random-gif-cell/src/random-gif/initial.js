// @ts-check
import { Loaded, Success, Image } from "./types"

export const initial = {
  image: Loaded.Y(Success.Y(Image.N())),
  tag: ""
}
