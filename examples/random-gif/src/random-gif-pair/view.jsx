import React from "react";

export function view(components) {
  return function(state, actions) {
    return (<div>
      <div style={{display: "inline-block"}}>
        {components.randomGifFirst.view(state.randomGifFirst, actions.randomGifFirst)}
      </div>
      <div style={{display: "inline-block"}}>
        {components.randomGifSecond.view(state.randomGifSecond, actions.randomGifSecond)}
      </div>
    </div>);
  };
}
