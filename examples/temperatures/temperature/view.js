import { h } from "preact";

import { temperatureIntents } from "./actions";

export const temperatureView = model => {
  return h("div", {},
    h("div", {},
      h("span", {}, model.label),
      h("span", {}, model.value),
      h("button", { class: "btn btn-sm btn-primary", onClick: temperatureIntents.changeUnits(model.id) }, "\xB0" + model.units),
      h("button", { class: "btn btn-sm btn-default", onClick: temperatureIntents.increase(model.id, 1) }, "+"),
      h("button", { class: "btn btn-sm btn-default", onClick: temperatureIntents.increase(model.id,-1) }, "-")
    )
  );
};
