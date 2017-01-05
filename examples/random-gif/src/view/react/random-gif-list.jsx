import React from "react";
import { handlers } from "../../random-gif-list";
import { view as randomGif } from "./random-gif.jsx";

export const view = model => {
  const randomGifView = id => (
    <div key={id} style={{display: "inline-block"}}>
      {randomGif(model.randomGifsById[id])}
      <button className="btn btn-default btn-xs" onClick={handlers.onRemove(id)}>Remove</button>
    </div>
  );

  return (<div>
    <div>
      <button className="btn btn-default btn-xs" onClick={handlers.onAdd}>Add</button>
    </div>
    <div>{model.randomGifIds.map(randomGifView)}</div>
  </div>);
};
