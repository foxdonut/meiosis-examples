import React from "react";
import jsnox from "jsnox";

import Action from "./actions";

const h = jsnox(React);

const view = (model, propose) => {
  const onChangeUnits = _evt => propose(Action.ChangeUnits());
  const onIncrease = _evt => propose(Action.Increase(1));
  const onDecrease = _evt => propose(Action.Decrease(1));

  return h("div",
    h("div",
      h("span", model.temperature),
      h("button.btn.btn-sm.btn-primary", { onClick: onChangeUnits }, " \xB0" +  model.units),
      h("button.btn.btn-sm.btn-default", { onClick: onIncrease }, "+"),
      h("button.btn.btn-sm.btn-default", { onClick: onDecrease }, "-")
    )
  );
};

export default view;
