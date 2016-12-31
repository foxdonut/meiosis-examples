import React from "react";

export const view = actions => model => (
  <div>
    {components.randomGifPairOne.view(model.randomGifPairOne, actions.randomGifPairOne)}
    {components.randomGifPairTwo.view(model.randomGifPairTwo, actions.randomGifPairTwo)}
  </div>
);