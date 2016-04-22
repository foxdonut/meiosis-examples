import React from "react";

import { Action } from "./actions";

const view = LabeledSlider => props => {
  const {model, actions} = props;

  const onAddMeasurement = _evt => actions.next(Action.AddMeasurement());
  const onRemoveMeasurement = id =>  _evt => actions.next(Action.RemoveMeasurement(id));

  const renderMeasurement = (measurement, index) => {
    return (
      <div key={measurement.id} style={{border:"1px solid gray"}}>
        id: {measurement.id}
        <LabeledSlider index={index} {...props}/>
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

export default view;
