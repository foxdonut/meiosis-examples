import React from "react";

export const view = actions => model => (
  <div>
    <div style={{display: "inline-block"}}>
      {components.randomGifFirst.view(model.randomGifFirst, actions.randomGifFirst)}
    </div>
    <div style={{display: "inline-block"}}>
      {components.randomGifSecond.view(model.randomGifSecond, actions.randomGifSecond)}
    </div>
  </div>
);