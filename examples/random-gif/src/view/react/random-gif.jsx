import React from "react";
import { handlers } from "../../random-gif";

export const view = (model, id) => {
  const src = model.isLoading ? "/examples/random-gif/images/loading.gif" : (
    model.isError ? "/examples/random-gif/images/error.png" : model.image_url
  );

  return (<div>
    <span>Tag:</span>
    <input type="text" value={model.tag} onChange={handlers.onEditTag(id)}/>
    <button className="btn btn-xs btn-default" onClick={handlers.onNewGif(id, model.tag)}>Random Gif</button>
    <div><img width="200" height="200" src={src}/></div>
  </div>);
};
