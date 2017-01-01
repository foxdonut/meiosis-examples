import React from "react";
import { view as randomGifPair } from "./random-gif-pair.jsx";

export const view = model => (
  <div>
    {randomGifPair(model.randomGifPairOne, "randomGifPairOne")}
    {randomGifPair(model.randomGifPairTwo, "randomGifPairTwo")}
  </div>
);
