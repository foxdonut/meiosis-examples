import m from "mithril";
import { intents } from "./actions";
import { imgsrc } from "./index";

export const randomGifView = model => {
  return (<div>
    <span>Tag:</span>
    <input type="text" value={ model.tag } oninput={ intents.editTag(model.id) }/>
    <button className="btn btn-xs btn-default" onclick={ intents.newGif(model.id, model.tag) }>Random Gif</button>
    <div><img width="200" height="200" src={ imgsrc(model) }/></div>
  </div>);
};
