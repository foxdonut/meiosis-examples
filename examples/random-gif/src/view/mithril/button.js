import m from "mithril";
import classnames from "classnames";
import { buttonIntents } from "../events/button";

export const buttonView = model => {
  const classes = classnames({ "btn-primary": model.active, "btn-danger": !model.active });
  const label = model.active ? "Active" : "Inactive";
  return m("button.btn", { class: classes, onclick: buttonIntents.toggle }, label);
};
