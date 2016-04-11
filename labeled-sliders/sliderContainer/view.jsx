import React from "react";

import { Action } from "./action";

const view = actions => model => {

  const onAddMeasurement = _evt => actions.onNext(Action.AddMeasurement());
  const onRemoveMeasurement = id =>  _evt => actions.onNext(Action.RemoveMeasurement(id));

  const renderMeasurement = measurement => {
    return (
      <div key={measurement.id}>
        {measurement.id}
        <button onClick={onRemoveMeasurement(measurement.id)}>Remove Measurement</button>
      </div>
    );
  };

  return (
    <div>
      <button onClick={onAddMeasurement}>Add Measurement</button>
      {model.measurements.map(renderMeasurement)}
    </div>
  );
};

export { view };
