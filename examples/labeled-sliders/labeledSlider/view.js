import { propose } from "meiosis";
import h from "snabbdom/h";

import { Action } from "./actions";

export const view = model => {
  const getValue = evt => parseInt(evt.target.value, 10);
  const onChangeValue = evt => propose(Action.UpdateMeasurement(model.id, getValue(evt)));
  const attrs = Object.assign({type: "range"}, model);

  return (
    h("div", [
      h("span", model.label),
      h("input", {attrs, on: {input: onChangeValue}}),
      h("span", `${model.value} ${model.units}`)
    ])
  );
};
