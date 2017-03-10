import m from "mithril";
import classnames from "classnames";
import { toggle } from "./actions";

export const buttonView = (model, update) => {
  const classes = classnames({ "btn-primary": model.active, "btn-danger": !model.active });
  const label = model.active ? "Active" : "Inactive";
  return m("button.btn", { class: classes, onclick: toggle(update) }, label);
};
