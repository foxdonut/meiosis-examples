import h from "snabbdom/h";
const { div } = require("hyperscript-helpers")(h);

import { Action } from "./actions";

const view = LabeledSlider => (model, actions) => {
  const onAddMeasurement = _evt => actions.sendUpdate(Action.AddMeasurement());
  const onRemoveMeasurement = id => actions.sendUpdate(Action.RemoveMeasurement(id));

  const renderMeasurement = (measurement, index) =>
    div({key: measurement.id, style: {border: "1px solid gray"}, id: measurement.id}, [
      LabeledSlider({measurement, index}, actions),
      div([
        h("button.btn.btn-danger.btn-sm",
          {on: {click: [onRemoveMeasurement, measurement.id]}}, "Remove Measurement")
      ])
    ]);

  return (
    div([
      div(`Measurements: ${model.measurements.map(JSON.stringify)}`),
      div([
        h("button.btn.btn-primary.btn-sm",
          {on: {click: onAddMeasurement}}, "Add Measurement")
      ]),
      ...model.measurements.map(renderMeasurement)
    ])
  );
};

export default view;
