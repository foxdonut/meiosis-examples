import React from "react";

import { Action } from "./action";

const view = actions => model => {

  const onAddMeasurement = _evt => {
    const subaction = id => ({
      onNext: labeledSliderAction => actions.onNext(Action.UpdateMeasurement({id, action: labeledSliderAction}))
    });
    actions.onNext(Action.AddMeasurement(subaction));
  };

  const onRemoveMeasurement = id =>  _evt => actions.onNext(Action.RemoveMeasurement(id));

  const renderMeasurement = measurement => {
    return (
      <div key={measurement.id} style={{border:"1px solid gray"}}>
        id: {measurement.id}
        {measurement.view(measurement.model)}
        <div><button className="btn btn-danger btn-sm" onClick={onRemoveMeasurement(measurement.id)}>Remove Measurement</button></div>
      </div>
    );
  };

  return (
    <div>
      <div>
        Measurements: {model.measurements.map(m => JSON.stringify(m.model))}
      </div>
      <div><button className="btn btn-primary btn-sm" onClick={onAddMeasurement}>Add Measurement</button></div>
      {model.measurements.map(renderMeasurement)}
    </div>
  );
};

export { view };
