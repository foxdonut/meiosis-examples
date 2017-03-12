import m from "mithril";
import { randomGifPairView } from "../random-gif-pair/view.jsx";

export const randomGifPairPairView = model => (
  <div>
    { randomGifPairView(model.randomGifPairOne) }
    { randomGifPairView(model.randomGifPairTwo) }
  </div>
);
