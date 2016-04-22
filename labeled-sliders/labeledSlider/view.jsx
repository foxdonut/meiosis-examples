import React from "react";

import { Action } from "./actions";

const view = ({model, actions}) => {
  const getModel = evt => parseInt(evt.target.value, 10);
  const onChangeValue = evt => actions.next(Action.Update(getModel(evt)));

  return (
    <div>
      <span>{model.label}</span>
      <input type="range" min={model.min} max={model.max} value={model.value}
        onChange={onChangeValue} />
      <span>{model.value} {model.units}</span>
    </div>
  );
};

export default view;
