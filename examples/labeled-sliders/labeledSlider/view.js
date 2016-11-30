import h from "snabbdom/h";

import { Action } from "./actions";

export const view = id => (model, propose) => {
  const getValue = evt => parseInt(evt.target.value, 10);
  const onChangeValue = evt => propose(Action.UpdateMeasurement(id, getValue(evt)));
  const attrs = Object.assign({type: "range"}, model);

  return (
    h("div", [
      h("span", model.label),
      h("input", {attrs, on: {input: onChangeValue}}),
      h("span", `${model.value} ${model.units}`)
    ])
  );
};
