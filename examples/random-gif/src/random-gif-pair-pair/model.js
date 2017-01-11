import { randomGifPair } from "../random-gif-pair";

export const initialModel = () => ({
  randomGifPairOne: randomGifPair.initialModel(),
  randomGifPairTwo: randomGifPair.initialModel()
});
