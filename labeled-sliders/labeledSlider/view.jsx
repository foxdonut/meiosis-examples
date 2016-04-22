import React from "react";

import { Action } from "./actions";

const view = ({model, actions, index}) => {
// FIXME: need a lens into the measurement here.
  const measurement = model.measurements[index];

  const getModel = evt => parseInt(evt.target.value, 10);
  const onChangeValue = evt => actions.next(Action.Update(index, getModel(evt)));

  return (
    <div>
      <span>{measurement.label}</span>
      <input type="range" min={measurement.min} max={measurement.max} value={measurement.value}
        onChange={onChangeValue} />
      <span>{measurement.value} {measurement.units}</span>
    </div>
  );
};

export default view;
