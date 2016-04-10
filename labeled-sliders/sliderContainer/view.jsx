import React from "react";

import { Action } from "./action";

const view = actions => model => {

  const onAddMeasurement = _evt => actions.onNext(Action.AddMeasurement());
  const onRemoveMeasurement = index =>  _evt => actions.onNext(Action.RemoveMeasurement(index));

  const renderMeasurement = measurement => (
    <div>
      {measurement}
      <button onClick={onRemoveMeasurement(0)}>Remove Measurement</button>
    </div>
  );

  return (
    <div>
      <button onClick={onAddMeasurement}>Add Measurement</button>
      {model.measurements.map(renderMeasurement)}
    </div>
  );
};

export { view };
