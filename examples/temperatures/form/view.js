import React from "react";
import jsnox from "jsnox";

import Action from "./actions";

const h = jsnox(React);

const view = (dateComponent, airTemperature, waterTemperature) => (model, propose) => {
  const onSave = _evt => propose(Action.Validate(model));

  return h("div",
    dateComponent(model),
    airTemperature(model),
    waterTemperature(model),
    h("button.btn.btn-md.btn-primary", { onClick: onSave }, "Save"),
    h("span", "Saved: " + model.store.saved)
  );
};

export default view;
