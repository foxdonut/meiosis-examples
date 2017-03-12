import m from "mithril";
import classnames from "classnames";

export const view = actions => (model, update) => {
  const classes = classnames({ "btn-primary": model.active, "btn-danger": !model.active });
  const label = model.active ? "Active" : "Inactive";
  return m("button.btn", { class: classes, onclick: actions.toggle(update) }, label);
};
