import React from "react";

export const view = actions => model => {
  const onAdd = evt => {
    evt.preventDefault();
    actions.addToRandomGifList();
  };

  const onRemove = id => evt => {
    evt.preventDefault();
    actions.removeFromRandomGifList(id);
  };

  const randomGif = id => {
    const component = components.randomGifComponents[id];

    return (<div key={id} style={{display: "inline-block"}}>
      {component.view(model[id], component.actions(actions.propose))}
      <button className="btn btn-default btn-xs" onClick={onRemove(id)}>Remove</button>
    </div>);
  };

  return (<div>
    <div>
      <button className="btn btn-default btn-xs" onClick={onAdd}>Add</button>
    </div>
    <div>{model.randomGifIds.map(randomGif)}</div>
  </div>);
};
