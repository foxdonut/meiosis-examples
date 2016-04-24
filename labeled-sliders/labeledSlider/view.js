import h from "snabbdom/h";
const { div, input, span } = require("hyperscript-helpers")(h);

import { Action } from "./actions";

const view = ({actions, measurement, index}) => {
  const getModel = evt => parseInt(evt.target.value, 10);
  const onChangeValue = evt => actions.next(Action.Update(index, getModel(evt)));

  return (
    div([
      span(measurement.label),
      input({attrs: {type: "range", ...measurement}, on: {change: onChangeValue}}),
      span(`${measurement.value} ${measurement.units}`)
    ])
  );
};

export default view;
