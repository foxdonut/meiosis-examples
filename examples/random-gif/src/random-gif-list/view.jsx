import m from "mithril";
import { randomGifView } from "../random-gif/view.jsx";
import { intents } from "./actions";

export const randomGifListView = model => {
  const renderRandomGif = id => (
    <div key={ id } style={ { display: "inline-block" } }>
      { randomGifView(model.randomGifsById[id]) }
      <button className="btn btn-default btn-xs" onclick={ intents.remove(id) }>Remove</button>
    </div>
  );

  return (<div>
    <div>
      <button className="btn btn-default btn-xs" onclick={ intents.add }>Add</button>
    </div>
    <div>{ model.randomGifIds.map(renderRandomGif) }</div>
  </div>);
};
