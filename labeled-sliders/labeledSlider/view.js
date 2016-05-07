import h from "snabbdom/h";
const { div, input, span } = require("hyperscript-helpers")(h);

const view = ({measurement, index}, actions) => {
  const getValue = evt => parseInt(evt.target.value, 10);
  const onChangeValue = evt => actions.sendUpdate({index, value: getValue(evt)});

  return (
    div([
      span(measurement.label),
      input({attrs: {type: "range", ...measurement}, on: {input: onChangeValue}}),
      span(`${measurement.value} ${measurement.units}`)
    ])
  );
};

export default view;
