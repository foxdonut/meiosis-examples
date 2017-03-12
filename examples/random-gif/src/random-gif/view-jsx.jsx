import m from "mithril";
import { imgsrc } from "./index";

export const view = actions => (model, update, events) => {
  return (<div>
    <span>Tag:</span>
    <input type="text" value={ model.tag } oninput={ actions.editTag(update, model.id) }/>
    <button className="btn btn-xs btn-default" onclick={ actions.newGif(update, events, model) }>Random Gif</button>
    <div><img width="200" height="200" src={ imgsrc(model) }/></div>
  </div>);
};
