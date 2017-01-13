import React from "react";
import { randomGifView } from "./random-gif.jsx";
import { randomGifList } from "../../random-gif-list";

export const randomGifListView = model => {
  const renderRandomGif = id => (
    <div key={ id } style={ { display: "inline-block" } }>
      { randomGifView(model.randomGifsById[id]) }
      <button className="btn btn-default btn-xs" onClick={ () => randomGifList.intents.remove(id) }>Remove</button>
    </div>
  );

  return (<div>
    <div>
      <button className="btn btn-default btn-xs" onClick={ randomGifList.intents.add }>Add</button>
    </div>
    <div>{ model.randomGifIds.map(renderRandomGif) }</div>
  </div>);
};
