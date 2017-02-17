import m from "mithril";
import { randomGifView } from "../random-gif/view.jsx";
import { randomGifListIntents } from "./actions";

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
