import React from "react";
import { actions } from "../../random-gif-list";
import { view as randomGif } from "./random-gif.jsx";

export const view = model => {
  const onAdd = evt => {
    evt.preventDefault();
    actions.addToRandomGifList();
  };

  const onRemove = id => evt => {
    evt.preventDefault();
    actions.removeFromRandomGifList(id);
  };

  const randomGifView = id => (
    <div key={id} style={{display: "inline-block"}}>
      {randomGif(model.randomGifsById[id], id)}
      <button className="btn btn-default btn-xs" onClick={onRemove(id)}>Remove</button>
    </div>
  );

  return (<div>
    <div>
      <button className="btn btn-default btn-xs" onClick={onAdd}>Add</button>
    </div>
    <div>{model.randomGifIds.map(randomGifView)}</div>
  </div>);
};
