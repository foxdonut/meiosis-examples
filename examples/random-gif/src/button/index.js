import m from "mithril";
import classnames from "classnames";
import { lensProp, not, over } from "ramda";

const toggle = update => () => update(over(lensProp("active"), not));

export const button = {
  model: () => ({
    active: false
  }),
  create: update => model => {
    const classes = classnames({ "btn-primary": model.active, "btn-danger": !model.active });
    const label = model.active ? "Active" : "Inactive";
    return m("button.btn", { class: classes, onclick: toggle(update) }, label);
  }
};
