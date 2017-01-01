import React from "react";
import { view as randomGif } from "./random-gif.jsx";

export const view = (model, id) => (
  <div>
    <div style={{display: "inline-block"}}>
      {randomGif(model.randomGifFirst, id + "_randomGifFirst")}
    </div>
    <div style={{display: "inline-block"}}>
      {randomGif(model.randomGifSecond, id + "_randomGifSecond")}
    </div>
  </div>
);
