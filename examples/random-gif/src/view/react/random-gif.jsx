import React from "react";

export const view = actions => model => {
  const onEditTag = evt => {
    evt.preventDefault();
    actions.editTag(evt.target.value);
  };

  const onNewGif = evt => {
    evt.preventDefault();
    actions.newGif(model.tag);
  };

  const src = model.isLoading ? "/examples/random-gif/images/loading.gif" : (
    model.isError ? "/examples/random-gif/images/error.png" : model.image_url
  );

  return (<div>
    <span>Tag:</span>
    <input type="text" value={model.tag} onChange={onEditTag}/>
    <button className="btn btn-xs btn-default" onClick={onNewGif}>Random Gif</button>
    <div><img width="200" height="200" src={src}/></div>0
  </div>);
}
