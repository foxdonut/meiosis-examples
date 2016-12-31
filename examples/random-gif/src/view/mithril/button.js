import m from "mithril";
import classnames from "classnames";

export const view = actions => model => {
  const onToggleButton = evt => {
    evt.preventDefault();
    actions.toggleButton();
  };
  const classes = classnames({ "btn-primary": model.active, "btn-danger": !model.active });
  const label = model.active ? "Active" : "Inactive";
  return m("button.btn", { class: classes, onclick: onToggleButton }, label);
}
