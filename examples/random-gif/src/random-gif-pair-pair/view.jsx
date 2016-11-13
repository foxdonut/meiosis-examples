import React from "react";

export function view(components) {
  return function(state, actions) {
    return (<div>
      {components.randomGifPairOne.view(state.randomGifPairOne, actions.randomGifPairOne)}
      {components.randomGifPairTwo.view(state.randomGifPairTwo, actions.randomGifPairTwo)}
    </div>);
  };
}
