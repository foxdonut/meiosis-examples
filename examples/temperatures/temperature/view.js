import { propose } from "meiosis";
import preact from "preact";
import jsnox from "jsnox";

import Action from "./actions";

const h = jsnox(preact);

export const temperatureView = (id, label) => model => {
  const withId = (id, obj) => { obj.id = id; return obj; };
  const onChangeUnits = _evt => propose(withId(id, Action.ChangeUnits()));
  const onIncrease = _evt => propose(withId(id, Action.Increase(1)));
  const onDecrease = _evt => propose(withId(id, Action.Decrease(1)));

  return h("div",
    h("div",
      h("span", label),
      h("span", model.value),
      h("button.btn.btn-sm.btn-primary", { onClick: onChangeUnits }, "\xB0" + model.units),
      h("button.btn.btn-sm.btn-default", { onClick: onIncrease }, "+"),
      h("button.btn.btn-sm.btn-default", { onClick: onDecrease }, "-")
    )
  );
};
