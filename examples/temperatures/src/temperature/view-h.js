import { h } from "preact";
import { createActions } from "./actions";

export const createTemperatureView = update => {
  const actions = createActions(update);

  return model =>
    h("div", {},
      h("div", {},
        h("span", {}, model.label),
        h("span", {}, model.value),
        h("button", { onClick: actions.changeUnits }, "\xB0" + model.units),
        h("button", { class: "button-outline", onClick: actions.increase( 1) }, "+"),
        h("button", { class: "button-outline", onClick: actions.increase(-1) }, "-")
      )
    );
};
