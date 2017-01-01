import React from "react";
import { view as randomGif } from "./random-gif.jsx";

export const view = model => (
  <div>
    <div style={{display: "inline-block"}}>
      {randomGif(model.randomGifFirst, "randomGifFirst")}
    </div>
    <div style={{display: "inline-block"}}>
      {randomGif(model.randomGifSecond, "randomGifSecond")}
    </div>
  </div>
);
