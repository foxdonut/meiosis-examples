import h from "snabbdom/h";

import { Action } from "./actions";

const view = sliders => (model, propose) => {
  const onAddMeasurement = _evt => propose(Action.AddMeasurement());
  const onRemoveMeasurement = id => _evt => propose(Action.RemoveMeasurement(id));

  const renderSlider = id => {
    const slider = sliders[id];

    return h("div", { key: id, style: { border: "1px solid gray" } }, [
      slider.view(model.slidersById[id], propose),
      h("div", [
        h("button.btn.btn-danger.btn-sm",
          { on: { click: onRemoveMeasurement(id) } }, "Remove Measurement")
      ])
    ]);
  };

  return h("div", [
    h("div", `Measurements: ${JSON.stringify(model.slidersById)}`),
    h("div", [
      h("button.btn.btn-primary.btn-sm",
        { on: { click: onAddMeasurement } }, "Add Measurement")
    ]),
    h("div", model.sliderIds.map(renderSlider))
  ]);
};

export default view;
