import React from "react";

export function view(components) {
  return function(state, actions) {
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
        {component.view(state[id], component.actions(actions.propose))}
        <button className="btn btn-default btn-xs" onClick={onRemove(id)}>Remove</button>
      </div>);
    };

    return (<div>
      <div>
        <button className="btn btn-default btn-xs" onClick={onAdd}>Add</button>
      </div>
      <div>{state.randomGifIds.map(randomGif)}</div>
    </div>);
  };
}
