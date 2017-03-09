import { h } from "preact";

import { changeUnits, increase } from "./actions";

export const temperatureView = (model, update) =>
  h("div", {},
    h("div", {},
      h("span", {}, model.label),
      h("span", {}, model.value),
      h("button", { class: "btn btn-sm btn-primary", onClick: changeUnits(model, update) }, "\xB0" + model.units),
      h("button", { class: "btn btn-sm btn-default", onClick: increase(model, update, 1) }, "+"),
      h("button", { class: "btn btn-sm btn-default", onClick: increase(model, update,-1) }, "-")
    )
  );
