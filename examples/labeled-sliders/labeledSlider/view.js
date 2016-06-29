import h from "snabbdom/h";
import { merge } from "ramda";

const view = ({measurement, index}, propose) => {
  const getValue = evt => parseInt(evt.target.value, 10);
  const onChangeValue = evt => propose({index, value: getValue(evt)});
  const attrs = merge({type: "range"}, measurement);

  return (
    h("div", [
      h("span", measurement.label),
      h("input", {attrs, on: {input: onChangeValue}}),
      h("span", `${measurement.value} ${measurement.units}`)
    ])
  );
};

export default view;
