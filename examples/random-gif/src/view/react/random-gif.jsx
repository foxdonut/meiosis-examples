import React from "react";
import { actions } from "../../random-gif";

export const view = (model, id) => {
  const onEditTag = evt => {
    evt.preventDefault();
    actions.editTag(id, evt.target.value);
  };

  const onNewGif = evt => {
    evt.preventDefault();
    actions.newGif(id, model.tag);
  };

  const src = model.isLoading ? "/examples/random-gif/images/loading.gif" : (
    model.isError ? "/examples/random-gif/images/error.png" : model.image_url
  );

  return (<div>
    <span>Tag:</span>
    <input type="text" value={model.tag} onChange={onEditTag}/>
    <button className="btn btn-xs btn-default" onClick={onNewGif}>Random Gif</button>
    <div><img width="200" height="200" src={src}/></div>
  </div>);
};
