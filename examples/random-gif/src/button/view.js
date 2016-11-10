import m from "mithril";
import classnames from "classnames";

export function view(state, actions) {
  const onToggleButton = evt => {
    evt.preventDefault();
    actions.toggleButton();
  };
  const classes = classnames({ "btn-primary": state.active, "btn-danger": !state.active });
  const label = state.active ? "Active" : "Inactive";
  return m("button.btn", { class: classes, onclick: onToggleButton }, label);
}
