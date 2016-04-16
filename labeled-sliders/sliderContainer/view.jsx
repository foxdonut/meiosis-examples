import React from "react";

import { Action } from "./action";
import { view as LsView } from "../labeledSlider/view.jsx";
import { update as lsUpdate } from "../labeledSlider/update";

const view = actions => model => {

  const onAddMeasurement = _evt => {
    actions.onNext(Action.AddMeasurement());
  };

  const onRemoveMeasurement = id =>  _evt => actions.onNext(Action.RemoveMeasurement(id));

  const lsActions = measurement => ({
    onNext: (action) => actions.onNext(Action.UpdateMeasurement(lsUpdate(action)(measurement)))
  });

  const renderMeasurement = measurement => {
    return (
      <div key={measurement.id} style={{border:"1px solid gray"}}>
        id: {measurement.id}
        {LsView(lsActions(measurement))(measurement)}
        <div>
          <button className="btn btn-danger btn-sm"
            onClick={onRemoveMeasurement(measurement.id)}>Remove Measurement</button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        Measurements: {model.measurements.map(JSON.stringify)}
      </div>
      <div><button className="btn btn-primary btn-sm" onClick={onAddMeasurement}>Add Measurement</button></div>
      {model.measurements.map(renderMeasurement)}
    </div>
  );
};

export { view };
