import React from "react";
import jsnox from "jsnox";

import Action from "./actions";

const h = jsnox(React);

const view = (id, label) => (model, propose) => {
  const onChangeUnits = _evt => propose({ id, action: Action.ChangeUnits() });
  const onIncrease = _evt => propose({ id, action: Action.Increase(1) });
  const onDecrease = _evt => propose({ id, action: Action.Decrease(1) });

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

export default view;
