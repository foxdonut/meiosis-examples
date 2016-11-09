import m from "mithril";
import classnames from "classnames";

export function view(state, actions) {
  const onToggleButton = evt => {
    evt.preventDefault();
    actions.toggleButton();
  };
  const classes = classnames({ active: state.active, inactive: !state.active });
  const label = state.active ? "Active" : "Inactive";
  return m("button", { class: classes, onclick: onToggleButton }, label);
}

