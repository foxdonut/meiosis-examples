import { propose } from "meiosis";
import h from "snabbdom/h";

import { Action } from "./actions";
import { view as sliderView } from "../labeledSlider";

export const view = model => {
  const onAddMeasurement = _evt => propose(Action.AddMeasurement());
  const onRemoveMeasurement = id => _evt => propose(Action.RemoveMeasurement(id));

  const renderSlider = id => h("div", { key: id, style: { border: "1px solid gray" } }, [
    sliderView({ id, model: model.slidersById[id] }),
    h("div", [
      h("button.btn.btn-danger.btn-sm",
        { on: { click: onRemoveMeasurement(id) } }, "Remove Measurement")
    ])
  ]);

  return h("div", [
    h("div", `Measurements: ${JSON.stringify(model.slidersById)}`),
    h("div", [
      h("button.btn.btn-primary.btn-sm",
        { on: { click: onAddMeasurement } }, "Add Measurement")
    ]),
    h("div", model.sliderIds.map(renderSlider))
  ]);
};
