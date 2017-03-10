import m from "mithril";
import { editTag, newGif } from "./actions";
import { imgsrc } from "./index";

export const randomGifView = (model, update, events) => {
  return (<div>
    <span>Tag:</span>
    <input type="text" value={ model.tag } oninput={ editTag(update, model.id) }/>
    <button className="btn btn-xs btn-default" onclick={ newGif(update, events, model) }>Random Gif</button>
    <div><img width="200" height="200" src={ imgsrc(model) }/></div>
  </div>);
};
