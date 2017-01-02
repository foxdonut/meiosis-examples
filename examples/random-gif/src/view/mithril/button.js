import m from "mithril";
import classnames from "classnames";
import { handlers } from "../../button";

export const view = model => {
  const classes = classnames({ "btn-primary": model.active, "btn-danger": !model.active });
  const label = model.active ? "Active" : "Inactive";
  return m("button.btn", { class: classes, onclick: handlers.onToggleButton }, label);
};
