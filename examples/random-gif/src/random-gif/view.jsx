import React from "react";

export function view(state, actions) {
  const onEditTag = evt => {
    evt.preventDefault();
    actions.editTag(evt.target.value);
  };

  const onNewGif = evt => {
    evt.preventDefault();
    actions.newGif(state.tag);
  };

  const src = state.isLoading ? "/examples/random-gif/images/loading.gif" : (
    state.isError ? "/examples/random-gif/images/error.png" : state.image_url
  );

  return (<div>
    <span>Tag:</span>
    <input type="text" value={state.tag} onChange={onEditTag}/>
    <button className="btn btn-xs btn-default" onClick={onNewGif}>Random Gif</button>
    <div><img width="200" height="200" src={src}/></div>0
  </div>);
}
