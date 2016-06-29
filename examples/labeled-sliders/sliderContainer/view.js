import h from "snabbdom/h";

import { Action } from "./actions";

const view = LabeledSlider => (model, propose) => {
  const onAddMeasurement = _evt => propose(Action.AddMeasurement());
  const onRemoveMeasurement = id => propose(Action.RemoveMeasurement(id));

  const renderMeasurement = (measurement, index) =>
    h("div", {key: measurement.id, style: {border: "1px solid gray"}, id: measurement.id}, [
      LabeledSlider({measurement, index}),
      h("div", [
        h("button.btn.btn-danger.btn-sm",
          {on: {click: [onRemoveMeasurement, measurement.id]}}, "Remove Measurement")
      ])
    ]);

  const measurementNodes = model.measurements.map(renderMeasurement);

  let nodes = [
    h("div", `Measurements: ${model.measurements.map(JSON.stringify)}`),
    h("div", [
      h("button.btn.btn-primary.btn-sm",
        {on: {click: onAddMeasurement}}, "Add Measurement")
    ])
  ].concat(measurementNodes);

  return h("div", nodes);
};

export default view;
