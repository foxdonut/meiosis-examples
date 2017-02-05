import m from "mithril";
import { randomGifEvents } from "../common/random-gif";
import { imgsrc } from "../../random-gif";

export const randomGifView = model => {
  return (<div>
    <span>Tag:</span>
    <input type="text" value={ model.tag } oninput={ randomGifEvents.onEditTag(model.id) }/>
    <button className="btn btn-xs btn-default" onclick={ randomGifEvents.onNewGif(model.id, model.tag) }>Random Gif</button>
    <div><img width="200" height="200" src={ imgsrc(model) }/></div>
  </div>);
};
