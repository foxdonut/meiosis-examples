import { propose } from "meiosis";
import { h } from "preact";

import { Action } from "./actions";

export const temperatureView = model => {
  const withId = (id, obj) => { obj.id = id; return obj; };
  const onChangeUnits = _evt => propose(withId(model.id, Action.ChangeUnits()));
  const onIncrease = _evt => propose(withId(model.id, Action.Increase(1)));
  const onDecrease = _evt => propose(withId(model.id, Action.Decrease(1)));

  return h("div", {},
    h("div", {},
      h("span", {}, model.label),
      h("span", {}, model.value),
      h("button", { class: "btn btn-sm btn-primary", onClick: onChangeUnits }, "\xB0" + model.units),
      h("button", { class: "btn btn-sm btn-default", onClick: onIncrease }, "+"),
      h("button", { class: "btn btn-sm btn-default", onClick: onDecrease }, "-")
    )
  );
};
