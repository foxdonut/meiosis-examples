import m from "mithril";
import { randomGifView } from "../random-gif/view.jsx";
import { add, remove } from "./actions";

export const randomGifListView = (model, update) => {
  const renderRandomGif = id => (
    <div key={ id } style={ { display: "inline-block" } }>
      { randomGifView(model.randomGifsById[id]) }
      <button className="btn btn-default btn-xs" onclick={ remove(update, id) }>Remove</button>
    </div>
  );

  return (<div>
    <div>
      <button className="btn btn-default btn-xs" onclick={ add(update) }>Add</button>
    </div>
    <div>{ model.randomGifIds.map(renderRandomGif) }</div>
  </div>);
};
