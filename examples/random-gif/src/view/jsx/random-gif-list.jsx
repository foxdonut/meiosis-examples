import m from "mithril";
import { randomGifView } from "./random-gif.jsx";
import { randomGifListIntents } from "../common/random-gif-list";

export const randomGifListView = model => {
  const renderRandomGif = id => (
    <div key={ id } style={ { display: "inline-block" } }>
      { randomGifView(model.randomGifsById[id]) }
      <button className="btn btn-default btn-xs" onclick={ randomGifListIntents.remove(id) }>Remove</button>
    </div>
  );

  return (<div>
    <div>
      <button className="btn btn-default btn-xs" onclick={ randomGifListIntents.add }>Add</button>
    </div>
    <div>{ model.randomGifIds.map(renderRandomGif) }</div>
  </div>);
};
