import m from "mithril";
import classnames from "classnames";

export const createButton = ({ actions }) => model => {
  const classes = classnames({ "btn-primary": model.active, "btn-danger": !model.active });
  const label = model.active ? "Active" : "Inactive";
  return m("button.btn", { class: classes, onclick: actions.onToggleButton }, label);
};
