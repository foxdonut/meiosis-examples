import React from "react";
import { randomGifPairView } from "./random-gif-pair.jsx";

export const randomGifPairPairView = model => (
  <div>
    { randomGifPairView(model.randomGifPairOne) }
    { randomGifPairView(model.randomGifPairTwo) }
  </div>
);
