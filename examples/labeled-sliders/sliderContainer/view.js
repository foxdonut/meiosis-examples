import h from "snabbdom/h";

import { Action } from "./actions";

const view = components => (model, propose) => {
  const onAddMeasurement = _evt => propose(Action.AddMeasurement());
  const onRemoveMeasurement = id => _evt => propose(Action.RemoveMeasurement(id));

  const renderSlider = id => {
    const component = components.sliderComponents[id];

    return h("div", { key: id, style: { border: "1px solid gray" } }, [
      component.view(model[id], propose),
      h("div", [
        h("button.btn.btn-danger.btn-sm",
          { on: { click: onRemoveMeasurement(id) } }, "Remove Measurement")
      ])
    ]);
  };

  return h("div", [
    //h("div", `Measurements: ${model.measurements.map(JSON.stringify)}`),
    h("div", [
      h("button.btn.btn-primary.btn-sm",
        { on: { click: onAddMeasurement } }, "Add Measurement")
    ]),
    h("div", model.sliderIds.map(renderSlider))
  ]);
};

export default view;
