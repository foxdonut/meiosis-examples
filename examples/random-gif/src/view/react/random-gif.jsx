import React from "react";
import { handlers, imgsrc } from "../../random-gif";

export const view = (model, id) => {
  return (<div>
    <span>Tag:</span>
    <input type="text" value={model.tag} onChange={handlers.onEditTag(id)}/>
    <button className="btn btn-xs btn-default" onClick={handlers.onNewGif(id, model.tag)}>Random Gif</button>
    <div><img width="200" height="200" src={imgsrc(model)}/></div>
  </div>);
};
