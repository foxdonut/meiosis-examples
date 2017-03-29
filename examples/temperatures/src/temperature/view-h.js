import { h } from "preact";
import { createActions } from "./actions";

export const createTemperatureView = update => {
  const actions = createActions(update);

  return model =>
    h("div", { class: "clearfix mb1" },
      h("span", { class: "right col col-2" }, model.label),
      h("span", { class: "mr1" }, model.value),
      h("button", { class: "mr1 btn btn-outline", onClick: actions.changeUnits }, "\xB0" + model.units),
      h("button", { class: "mr1 btn btn-primary", onClick: actions.increase( 1) }, "+"),
      h("button", { class: "btn rounded white bg-red", onClick: actions.increase(-1) }, "-")
    );
};
